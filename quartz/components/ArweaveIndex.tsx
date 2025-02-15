import { QuartzComponent, QuartzComponentProps } from "./types"
import style from "./styles/arweaveindex.scss"
import { JSX } from "preact"

interface ArweaveHash {
  hash: string
  timestamp: string
  link: string
}

interface ArweaveFile {
  uuid: string
  title: string
  latest_content?: string
  arweave_hashes: ArweaveHash[]
}

interface ArweaveIndex {
  files: ArweaveFile[]
}

function ArweaveIndex(): QuartzComponent {
  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData } = props
    const uuid = fileData?.frontmatter?.uuid
    
    if (!uuid) {
      return null
    }

    let arweaveData: ArweaveFile | undefined
    try {
      const indexData: ArweaveIndex = require("../../data/arweave.json")
      arweaveData = indexData.files.find(f => f.uuid === uuid)
    } catch (e) {
      console.warn("Could not load Arweave index")
      return null
    }

    if (!arweaveData?.arweave_hashes?.length) {
      return null
    }

    // Sort hashes by timestamp, newest first
    const sortedHashes = [...arweaveData.arweave_hashes].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    const getDownloadUrl = () => {
      if (!arweaveData?.latest_content) return '#'
      // Create a data URL from the content
      return `data:text/markdown;charset=utf-8,${encodeURIComponent(arweaveData.latest_content)}`
    }

    const getDownloadFilename = () => {
      const date = new Date().toISOString().split('T')[0]
      return `${arweaveData?.title || 'note'}-${date}.md`
    }

    return (
      <div class="arweave-history">
        <h3>Version History</h3>
        <div class="arweave-list">
          {/* Current Version Entry */}
          <div class="arweave-entry">
            <div class="arweave-timestamp">
              Download current page
            </div>
            <div class="arweave-actions">
              {arweaveData?.latest_content && (
                <a
                  href={getDownloadUrl()}
                  download={getDownloadFilename()}
                  class="download-button"
                  aria-label="Download current version"
                  style={{
                    position: 'relative',
                    transform: 'none'
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    if (!arweaveData?.latest_content) {
                      e.preventDefault()
                      alert('No content available for download')
                    }
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    style={{ pointerEvents: 'none' }}
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Arweave Backup Entries */}
          {sortedHashes.map((entry, idx) => {
            const date = new Date(entry.timestamp)
            const formattedDate = date.toLocaleString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZone: 'UTC',
              timeZoneName: 'short'
            })

            return (
              <div class="arweave-entry" key={idx}>
                <div class="arweave-timestamp">
                  {formattedDate}
                </div>
                <div class="arweave-actions">
                  <a 
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="arweave-link"
                    title="Visit file on Arweave"
                    aria-label="Visit file on Arweave"
                    style={{ padding: '8px', display: 'inline-flex' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  Component.css = style
  return Component
}

export default ArweaveIndex 