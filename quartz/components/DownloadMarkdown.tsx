import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const DownloadMarkdown: QuartzComponent = ({
  fileData,
  displayClass,
}: QuartzComponentProps) => {
  const downloadable = fileData.frontmatter?.downloadable === true

  if (!downloadable) {
    return null
  }

  // Define the download function
  const downloadMarkdownScript = `
    console.log("Script loaded");
    function downloadMarkdown() {
      console.log("Download function called");
      alert("Download button clicked");
      const content = "Test content";
      const filename = "test.txt";
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }
    console.log("Download function defined");
  `

  return (
    <div class={classNames(displayClass, "download-markdown-container")}>
      <button 
        class="download-markdown-button" 
        onclick="console.log('Button clicked'); downloadMarkdown();"
      >
        Download Markdown
      </button>
      <script dangerouslySetInnerHTML={{ __html: downloadMarkdownScript }} />
    </div>
  )
}

DownloadMarkdown.css = `
  .download-markdown-container {
    margin-top: 1rem;
  }
  .download-markdown-button {
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  .download-markdown-button:hover {
    background-color: #e0e0e0;
  }
`

export default (() => DownloadMarkdown) satisfies QuartzComponentConstructor