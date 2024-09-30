import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [
    Component.TagList(),
    Component.Graph({
      showGraph: (frontmatter) => !frontmatter.hideGraph,
      // ... other graph options
    }),
    Component.LicenseInfo(),
  ],
  footer: Component.Footer({
    links: {
      // Your footer links here
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle({
      showTitle: (frontmatter) => !frontmatter.hideTitle,
    }),
    Component.AuthorName(),
    Component.PublishDate(),
  ],
  left: [
    // Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.DesktopOnly(Component.Backlinks()),
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