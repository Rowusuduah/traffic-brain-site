import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { FullSlug } from "../util/path"
import { classNames } from "../util/lang"

// Renders the note's top-level folder as an interstate exit tab sitting on the
// guide-panel rule above the title: "EXIT 07 · TIA & OPERATIONS". The tab is a
// live link back to its folder hub — taking the exit takes you somewhere.
// Folder numbers 00-22 are the vault's real taxonomy; the tab reuses them as
// exit numbering. Notes at the vault root get no tab, just the panel rule.
const ExitTab: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  // real notes carry relativePath; synthesized folder pages only have a slug
  let folder = ""
  let folderSlug = ""
  const slug = fileData.slug ?? ""
  const rel = fileData.relativePath ?? ""
  if (rel.includes("/")) {
    folder = rel.split("/")[0]
    folderSlug = slug.split("/")[0]
  } else {
    const parts = slug.split("/")
    if (parts.length >= 2 && parts[parts.length - 1] === "index" && parts[0] !== "tags") {
      folderSlug = parts[0]
      folder = folderSlug.replace(/--and--/g, " & ").replace(/-/g, " ")
    }
  }

  if (folder === "") {
    return <div class={classNames(displayClass, "exit-tab-row", "exit-tab-row-empty")} />
  }

  const m = folder.match(/^(\d+)\s+(.*)$/)
  const text = m ? `Exit ${m[1]} · ${m[2]}` : folder
  const href = resolveRelative(slug as FullSlug, (folderSlug + "/index") as FullSlug)
  return (
    <div class={classNames(displayClass, "exit-tab-row")}>
      <a class="exit-tab" href={href}>
        {text}
      </a>
    </div>
  )
}

export default (() => ExitTab) satisfies QuartzComponentConstructor
