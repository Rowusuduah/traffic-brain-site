import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Renders the note's top-level folder as an interstate exit tab sitting on the
// guide-panel rule above the title: "EXIT 07 · TIA & OPERATIONS".
// Folder numbers 00-22 are the vault's real taxonomy; the tab reuses them as
// exit numbering. Notes at the vault root get no tab, just the panel rule.
const ExitTab: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  // real notes carry relativePath; synthesized folder pages only have a slug
  let folder = ""
  const rel = fileData.relativePath ?? ""
  if (rel.includes("/")) {
    folder = rel.split("/")[0]
  } else {
    const slug = fileData.slug ?? ""
    const parts = slug.split("/")
    if (parts.length >= 2 && parts[parts.length - 1] === "index" && parts[0] !== "tags") {
      folder = parts[0].replace(/--and--/g, " & ").replace(/-/g, " ")
    }
  }

  if (folder === "") {
    return <div class={classNames(displayClass, "exit-tab-row", "exit-tab-row-empty")} />
  }

  const m = folder.match(/^(\d+)\s+(.*)$/)
  const text = m ? `Exit ${m[1]} · ${m[2]}` : folder
  return (
    <div class={classNames(displayClass, "exit-tab-row")}>
      <span class="exit-tab">{text}</span>
    </div>
  )
}

export default (() => ExitTab) satisfies QuartzComponentConstructor
