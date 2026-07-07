import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ExitTab from "./quartz/components/ExitTab"
import TitleBlock from "./quartz/components/TitleBlock"

// Explorer options shared by both layouts. The sortFn pins START HERE — the
// designated entry point — above the folder wall. It is serialized with
// .toString() and re-evaluated in the browser, so it must stay self-contained.
const explorerOptions = {
  title: "All sheets",
  folderDefaultState: "collapsed" as const,
  sortFn: (a: any, b: any) => {
    if (!a.isFolder && a.displayName === "START HERE") return -1
    if (!b.isFolder && b.displayName === "START HERE") return 1
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    if (!a.isFolder && b.isFolder) {
      return 1
    } else {
      return -1
    }
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub — source & vault": "https://github.com/Rowusuduah/traffic-brain-site",
      "FDOT": "https://www.fdot.gov",
      "MUTCD (FHWA)": "https://mutcd.fhwa.dot.gov",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "/", rootName: "Home" }),
    ExitTab(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  afterBody: [TitleBlock()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [
    Component.Graph(),
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "/", rootName: "Home" }),
    ExitTab(),
    Component.ArticleTitle(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [],
}
