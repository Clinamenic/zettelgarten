import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface ArticleSubtitleOptions {
  showSubtitle?: (frontmatter: Frontmatter) => boolean
}

interface Frontmatter {
  subtitle?: string
  hideSubtitle?: boolean
  // ... other frontmatter properties
}

const defaultOptions: ArticleSubtitleOptions = {
  showSubtitle: (frontmatter: Frontmatter) => !frontmatter.hideSubtitle,
}

export default ((opts?: ArticleSubtitleOptions) => {
  const ArticleSubtitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const showSubtitle = opts?.showSubtitle ?? defaultOptions.showSubtitle
    const subtitle = fileData.frontmatter?.subtitle

    if (!showSubtitle || !showSubtitle(fileData.frontmatter) || !subtitle) {
      return null
    }

    return <h2 class={classNames(displayClass, "article-subtitle")}><em>{subtitle}</em></h2>
  }

  ArticleSubtitle.css = `
  .article-subtitle {
    color: var(--dark);
    line-height: 1.6 !important;
    margin: -1rem 0rem 1.75rem 0rem;
    padding: 0rem 5rem;
    font-size: 1rem;
    text-align: center;
    transition: color 0.5s ease
    font-style: italic !important;
    font-weight: 200;
    @media all and (max-width: calc(750px + 2rem)) { 
      padding: 0rem;
    }
  }
  `

  return ArticleSubtitle
}) satisfies QuartzComponentConstructor