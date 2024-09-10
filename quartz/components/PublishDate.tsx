import { QuartzComponentConstructor, QuartzComponent } from "./types"
import "./styles/publishdate.scss"

const PublishDate: QuartzComponent = ({ cfg, fileData }) => {
  const publishDateStr = fileData.frontmatter?.["date published"]
  if (!publishDateStr) return null

  const date = new Date(publishDateStr)
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error(`Invalid date: ${publishDateStr}`)
    return null
  }

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(cfg.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="publish-date quartz-publish-date">
      Published on{" "}
      <time dateTime={date.toISOString()}>{formatDate(date)}</time>
    </div>
  )
}

export default (() => PublishDate) satisfies QuartzComponentConstructor