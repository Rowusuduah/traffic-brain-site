import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Traffic Engineering Brain — Quartz config
 *
 * Design direction: "Positive Guidance". The page is daytime pavement — cool
 * concrete white, federal typography — and MUTCD signage color appears only
 * where a decision is made: links are guide-sign green, #status/verify wears
 * warning yellow, verbatim standards sit in regulatory black-and-white.
 * Dark mode is night driving: the page recedes to unlit asphalt and the
 * retroreflective elements (links, tabs, panels) brighten.
 *
 * Fonts: Overpass is the open-source digitization of FHWA Highway Gothic —
 * the literal letterface of US guide signs. Public Sans is the US federal
 * government's own typeface. Overpass Mono keeps engineering notation in the
 * same family.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Traffic Engineering Brain",
    pageTitleSuffix: " · Traffic Engineering Brain",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "rowusuduah.github.io/traffic-brain-site",
    ignorePatterns: [
      "private",
      ".obsidian",
      // Obsidian-operational and personal material stays in the vault but
      // does not publish:
      "00 Home.md",
      "01 Templates/**",
      "20 Projects/**",
      "21 Daily/**",
      "22 Inbox/**",
      "17 Life/**",
      "00 System/Skill Tracker.md",
      "00 System/Questions for Senior Engineers.md",
      "00 System/Plans - 30 to 90 to 3 Years.md",
      "16 Career/Experience Tracker for PE-PTOE.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Overpass", weights: [700, 800] },
        body: { name: "Public Sans", weights: [400, 600], includeItalic: true },
        code: { name: "Overpass Mono", weights: [400, 600] },
      },
      colors: {
        lightMode: {
          light: "#f5f7f4", // daylight concrete — page background
          lightgray: "#dee3db", // borders, table rules, code background
          gray: "#69726b", // weathered asphalt — muted text, dates
          darkgray: "#232823", // fresh asphalt — body text
          dark: "#121712", // headings, icons, regulatory borders
          secondary: "#046a38", // guide-sign green — links, panels
          tertiary: "#12854c", // hover states
          highlight: "rgba(4, 106, 56, 0.07)",
          textHighlight: "#ffedad", // marking-yellow tint behind ==marks==
        },
        darkMode: {
          light: "#121614", // night asphalt
          lightgray: "#242b26",
          gray: "#7e8881", // delineator gray
          darkgray: "#e6ebe4", // headlight white — body text
          dark: "#f4f7f2",
          secondary: "#3fb577", // retroreflective green
          tertiary: "#6fcb9b",
          highlight: "rgba(63, 181, 119, 0.13)",
          textHighlight: "rgba(255, 209, 0, 0.18)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // git gives real per-note revision dates on CI (fetch-depth: 0);
      // filesystem is the local-preview fallback
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        // a plan-set sheet index is ordered, not sorted by modification time
        sort: (a, b) =>
          String(a.frontmatter?.title ?? a.slug).localeCompare(
            String(b.frontmatter?.title ?? b.slug),
            undefined,
            { numeric: true, sensitivity: "base" },
          ),
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
