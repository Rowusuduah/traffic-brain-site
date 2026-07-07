import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Traffic Engineering Brain — Quartz config
 * Tuned for readability + a calm, professional palette (not the stock theme).
 * Drop this file into the root of your Quartz folder, replacing the default.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Traffic Engineering Brain",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,          // hover-preview of linked notes — great for a wiki
    analytics: null,               // no tracking
    locale: "en-US",
    baseUrl: "rowusuduah.github.io/traffic-brain-site",
    ignorePatterns: ["private", "templates/**/_*", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Libre Franklin",   // clean engineering-report feel
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f6",         // warm off-white page
          lightgray: "#e6e4df",     // borders
          gray: "#b8b5ad",          // graph links, subtle text
          darkgray: "#33312d",      // body text
          dark: "#1f1e1b",          // headings
          secondary: "#1f6f5c",     // deep teal — links & accents (your palette)
          tertiary: "#3d9970",      // hover / graph highlight
          highlight: "rgba(31, 111, 92, 0.12)",  // link-underline + search hit
          textHighlight: "#e8d44daa",
        },
        darkMode: {
          light: "#1b1a18",
          lightgray: "#3a3833",
          gray: "#6a675f",
          darkgray: "#d8d4cb",
          dark: "#f0ede4",
          secondary: "#4fb99a",
          tertiary: "#6fd3b3",
          highlight: "rgba(79, 185, 154, 0.15)",
          textHighlight: "#b3a125aa",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),  // makes [[wikilinks]] + callouts work
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),      // resolves your links by note name
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
