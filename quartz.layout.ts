import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    // Component.PageTitle(),
    Component.Darkmode(),
    Component.Search(),
  ],
  afterBody: [
    Component.TagList(),
    Component.FlexContainer({
      components: [
        Component.LicenseInfo(),
        Component.CitationGenerator({
          defaultStyle: 'apa'
        })
      ],
      showFlex: (frontmatter) => frontmatter?.quartzShowFlex ?? false,
    }),
    Component.DownloadMarkdown(),
    Component.Graph({
      showGraph: (frontmatter) => frontmatter.quartzShowGraph ?? false,
    }),
  ],
  footer: Component.Footer({
    links: {
    "GitHub": "https://github.com/clinamenic",
    "Twitter": "https://twitter.com/clinamenic",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Banner(),
    Component.ArticleTitle({
      showTitle: (frontmatter) => !frontmatter.hideTitle,
    }),
    Component.ArticleSubtitle(),
    Component.AuthorName(),
    Component.PublishDate(),
  ],
  left: [
    // Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.Backlinks()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    // Component.ContentMeta(),
  ],
  left: [
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
  ],
  
}

export const defaultLayout = defaultContentPageLayout




    // Component.DesktopOnly(Component.Comments({
    //  provider: 'giscus',
    //  options: {
    //    repo: 'clinamenic/zettelgarten',
    //    repoId: 'R_kgDOMqLVgA',
    //    category: 'Announcements',
    //    categoryId: 'DIC_kwDOMqLVgM4CjP31',
    //  },
    //  showComments: (frontmatter) => !frontmatter.hideComments,
    // })),