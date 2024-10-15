import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function DownloadMarkdown({ fileData }: QuartzComponentProps) {
  const downloadable = fileData.frontmatter?.downloadable === true

  if (!downloadable) {
    return null
  }

  const downloadMarkdown = () => {
    const content = fileData.content
    const filename = fileData.slug.split('/').pop() + '.md'
    const blob = new Blob([content], { type: 'text/markdown' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <button className="download-markdown" onClick={downloadMarkdown}>
      Download Markdown
    </button>
  )
}

export default (() => DownloadMarkdown) satisfies QuartzComponentConstructor