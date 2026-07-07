import { Date as DateEl, getDate } from "./Date"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"

// Plan-sheet title block at the foot of every note. The vault's premise is
// that standards rot, so the last-checked date is load-bearing information:
// blank cells honestly say so instead of hiding, and a checked date renders
// in guide green. The seal cell carries the E.I.T. disclaimer on every sheet.
const TitleBlock: QuartzComponent = ({ cfg, fileData, displayClass }: QuartzComponentProps) => {
  if (!fileData.text) {
    return null
  }

  const rawChecked = fileData.frontmatter?.["last-checked" as keyof typeof fileData.frontmatter]
  let checked = ""
  if (rawChecked instanceof Date) {
    checked = rawChecked.toISOString().slice(0, 10)
  } else if (rawChecked !== undefined && rawChecked !== null) {
    checked = String(rawChecked).trim()
  }

  const modified = getDate(cfg, fileData)
  const { minutes } = readingTime(fileData.text)

  return (
    <div class={classNames(displayClass, "title-block")}>
      <div class="title-block-cell">
        <span class="title-block-label">Rev.</span>
        <span class="title-block-value">
          {modified ? <DateEl date={modified} locale={cfg.locale} /> : "—"}
        </span>
      </div>
      <div class="title-block-cell">
        <span class="title-block-label">Last checked</span>
        {checked ? (
          <span class="title-block-value title-block-checked">{checked}</span>
        ) : (
          <span class="title-block-value title-block-unchecked">not yet checked</span>
        )}
      </div>
      <div class="title-block-cell">
        <span class="title-block-label">Length</span>
        <span class="title-block-value">{Math.ceil(minutes)} min read</span>
      </div>
      <div class="title-block-cell title-block-seal">
        <span class="title-block-label">Seal</span>
        <span class="title-block-value title-block-unchecked">reserved — E.I.T.</span>
      </div>
    </div>
  )
}

export default (() => TitleBlock) satisfies QuartzComponentConstructor
