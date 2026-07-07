import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Renders the note's frontmatter `link:` field as a visible off-ramp to the
// official source — service-sign blue, because the official document, not the
// summary, is the authority. Frontmatter is otherwise invisible on the site,
// which buried every reference note's canonical URL.
const SourceLink: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const raw = fileData.frontmatter?.["link" as keyof typeof fileData.frontmatter]
  if (typeof raw !== "string") {
    return null
  }
  const m = raw.match(/https?:\/\/[^\s")\]]+/)
  if (!m) {
    return null
  }
  const url = m[0].replace(/[.,;]$/, "")
  let label = url
  try {
    const u = new URL(url)
    label = u.hostname.replace(/^www\./, "") + (u.pathname !== "/" ? u.pathname : "")
    if (label.length > 48) {
      label = label.slice(0, 45) + "…"
    }
  } catch {
    return null
  }
  return (
    <p class={classNames(displayClass, "source-link-row")}>
      <a class="source-link" href={url} target="_blank" rel="noopener noreferrer">
        <span class="source-link-label">Official source</span> {label} ↗
      </a>
    </p>
  )
}

export default (() => SourceLink) satisfies QuartzComponentConstructor
