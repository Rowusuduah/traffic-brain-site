// Link-rot checker: sweeps every frontmatter `link:` URL in published content
// and reports failures. Run locally (node tools/check-links.mjs) or via the
// monthly GitHub Action, which opens an issue when links die.
// Exit code 1 when any link fails so CI can react.
import fs from "node:fs"
import path from "node:path"

const ROOT = path.join(process.cwd(), "content")
const SKIP_DIRS = new Set(["01 Templates", "17 Life", "20 Projects", "21 Daily", "22 Inbox", "private", ".obsidian"])
// sites that block automated clients but are verified to serve humans
const KNOWN_BOT_WALLED = [
  "highways.dot.gov",
  "cmfclearinghouse.fhwa.dot.gov", // federal WAF rejects node fetch, serves curl/browsers
  "nacto.org",
  "myclearwater.com",
  "sarasotafl.gov",
  "collier.gov",
  "scgov.net",
  "knowledge.uli.org",
  "uli.bookstore.ipgbook.com",
  "bentley.com",
]

// treat network-level errors on known bot-walled hosts as OK too


function collectLinks(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) collectLinks(p, out)
      continue
    }
    if (!e.name.endsWith(".md")) continue
    const text = fs.readFileSync(p, "utf8")
    if (!text.startsWith("---\n")) continue
    const end = text.indexOf("\n---", 4)
    if (end === -1) continue
    const fm = text.slice(4, end)
    const m = fm.match(/^link:\s*(.*)$/m)
    if (!m) continue
    const u = m[1].match(/https?:\/\/[^\s")\]]+/)
    if (u) out.push({ file: path.relative(ROOT, p), url: u[0].replace(/[.,;]$/, "") })
  }
}

async function check(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 20000)
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/pdf,*/*",
      },
    })
    return res.status
  } catch {
    return 0
  } finally {
    clearTimeout(timer)
  }
}

const links = []
collectLinks(ROOT, links)
console.log(`Checking ${links.length} official-source links...`)

const failures = []
for (const { file, url } of links) {
  const status = await check(url)
  const botWalled = KNOWN_BOT_WALLED.some((h) => url.includes(h))
  const ok = (status >= 200 && status < 400) || (botWalled && (status === 403 || status === 0))
  if (!ok) {
    failures.push({ file, url, status })
    console.log(`  FAIL ${status || "ERR"} ${file} -> ${url}`)
  }
}

console.log(`\n${links.length - failures.length}/${links.length} OK, ${failures.length} failing`)
if (failures.length > 0) {
  fs.writeFileSync(
    "link-failures.md",
    "The monthly link sweep found dead official-source links. Standards rot — fix the `link:` frontmatter in each note:\n\n" +
      failures.map((f) => `- [ ] \`${f.file}\` → ${f.url} (HTTP ${f.status || "no response"})`).join("\n") +
      "\n",
  )
  process.exit(1)
}
