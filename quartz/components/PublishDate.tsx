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
    const formattedDate = date.toLocaleDateString(cfg.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    // Split the formatted date string
    const [month, day, year] = formattedDate.split(' ')
    
    // Capitalize the month and reconstruct the date string
    return `${month.toUpperCase()} ${day} ${year}`
  }

  return (
    <div className="publish-date quartz-publish-date">
      PUBLISHED ON{" "}
      <time dateTime={date.toISOString()}>{formatDate(date)}</time>
    </div>
  )
}

export default (() => PublishDate) satisfies QuartzComponentConstructor