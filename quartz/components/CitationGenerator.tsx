import { QuartzComponentConstructor, QuartzComponent } from "./types"
import { ValidLocale } from "../i18n/locales/definition"
import { classNames } from "../util/lang"
import style from "./styles/citationGenerator.scss?module"
import citationStyles from './CitationStyles'
import { getExportFormat } from './CitationExports'
import { CitationFields } from './types/CitationTypes'

interface CitationGeneratorOptions {
  defaultStyle?: 'apa' | 'mla' | 'chicago' | 'ieee' | 'harvard'
}

export default ((opts?: CitationGeneratorOptions) => {
  const CitationGenerator: QuartzComponent = ({
    fileData,
    displayClass,
    cfg,
  }) => {
    if (!fileData.frontmatter?.quartzShowCitation) {
      return null
    }

    const locale = cfg?.locale ?? "en-US"
    const defaultStyle = opts?.defaultStyle ?? 'apa'
    const containerId = `citation-${Math.random().toString(36).substr(2, 9)}`

    const helperScript = `
      // Helper functions
      function sanitizeForExport(str) {
        return str?.replace(/[\\{\\}\\\\]/g, '\\$&') || '';
      }

      function formatAuthorAPA(author) {
        if (!author) return '';
        const parts = author.split(' ');
        const lastName = parts[parts.length - 1];
        const initials = parts.slice(0, -1).map(n => n[0].toUpperCase() + '.').join(' ');
        return \`\${lastName}, \${initials}\`;
      }

      function formatAuthors(author) {
        if (!author) return '';
        if (typeof author === 'string') {
          return author.split(/[,;&]/).map(a => a.trim()).join(', ');
        }
        return Array.isArray(author) ? author.join(', ') : author;
      }

      function formatAuthorIEEE(author) {
        if (!author) return '';
        const parts = author.split(' ');
        const lastName = parts[parts.length - 1];
        const initials = parts.slice(0, -1).map(n => n[0].toUpperCase() + '.').join(' ');
        return \`\${initials} \${lastName}\`;
      }

      function formatJournalIEEE(journal) {
        if (!journal) return '';
        return journal
          .split(' ')
          .map(word => {
            if (['of', 'and', 'the', 'for', 'in', 'on', 'to'].includes(word.toLowerCase())) {
              return '';
            }
            return \`\${word[0].toUpperCase()}.\`;
          })
          .filter(Boolean)
          .join(' ');
      }

      function formatDate(date) {
        return date ? new Date(date).getFullYear() : '';
      }

      function formatAuthorMLA(author) {
        if (!author) return '';
        const parts = author.split(' ');
        const lastName = parts[parts.length - 1];
        const firstName = parts.slice(0, -1).join(' ');
        return \`\${lastName}, \${firstName}\`;
      }

      // Citation styles
      window.citationHelpers = {
        styles: {
          apa: function(data) {
            const authors = formatAuthorAPA(data.author);
            const year = formatDate(data.date);
            const title = data.title || '';
            const journal = data.journal || '';
            const volume = data.volume || '';
            const issue = data.issue || '';
            const pages = data.pages || '';
            const doi = data.doi || '';

            return \`\${authors} (\${year}). \${title}. \${journal}, \${volume}(\${issue}), \${pages}\${doi ? \`. https://doi.org/\${doi}\` : ''}\`;
          },
          mla: function(data) {
            const author = formatAuthorMLA(data.author);
            const title = data.title || '';
            const journal = data.journal || '';
            const volume = data.volume || '';
            const issue = data.issue || '';
            const year = new Date(data.date).getFullYear();
            const pages = data.pages || '';

            return \`\${author}. "\${title}." \${journal}, vol. \${volume}, no. \${issue}, \${year}, pp. \${pages}.\`;
          },
          chicago: function(data) {
            const authors = formatAuthors(data.author);
            const title = data.title || '';
            const journal = data.journal || '';
            const volume = data.volume || '';
            const year = formatDate(data.date);
            const pages = data.pages || '';

            return \`\${authors}. "\${title}." \${journal} \${volume} (\${year}): \${pages}\`;
          },
          ieee: function(data) {
            const authors = formatAuthorIEEE(data.author);
            const title = data.title || '';
            const journal = formatJournalIEEE(data.journal || '');
            const volume = data.volume || '';
            const issue = data.issue || '';
            const year = formatDate(data.date);
            const pages = data.pages || '';

            return \`\${authors}, "\${title}," \${journal}, vol. \${volume}, no. \${issue}, pp. \${pages}, \${year}\`;
          },
          harvard: function(data) {
            const authors = formatAuthors(data.author);
            const year = formatDate(data.date);
            const title = data.title || '';
            const journal = data.journal || '';
            const volume = data.volume || '';
            const issue = data.issue || '';
            const pages = data.pages || '';

            return \`\${authors} \${year}, '\${title}', \${journal}, vol. \${volume}, no. \${issue}, pp. \${pages}\`;
          }
        },
        frontmatter: ${JSON.stringify(fileData.frontmatter)},
        locale: "${locale}",
        exportFormat: function(format, fields) {
          const authors = formatAuthors(fields.author);
          const year = formatDate(fields.date);
          const title = fields.title || '';
          
          if (format === 'bibtex') {
            return \`@article{
  title={\${sanitizeForExport(title)}},
  author={\${sanitizeForExport(authors)}},
  year={\${year}},
  journal={\${sanitizeForExport(fields.journal || '')}},
  volume={\${fields.volume || ''}},
  number={\${fields.issue || ''}},
  pages={\${fields.pages || ''}},
  doi={\${fields.doi || ''}}
}\`;
          } else if (format === 'ris') {
            return \`TY  - JOUR
T1  - \${title}
AU  - \${authors}
PY  - \${year}
JF  - \${fields.journal || ''}
VL  - \${fields.volume || ''}
IS  - \${fields.issue || ''}
SP  - \${fields.pages || ''}
DO  - \${fields.doi || ''}
ER  -\`;
          }
          return '';
        }
      };

      console.log('Frontmatter:', window.citationHelpers.frontmatter);
      console.log('Available styles:', Object.keys(window.citationHelpers.styles));
    `

    const initScript = `
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded, initializing citation handlers');
        try {
          const container = document.getElementById('${containerId}');
          console.log('Container found:', !!container);
          if (!container) return;

          // Style selector
          const styleSelect = container.querySelector('select[data-citation-style]');
          console.log('Style select found:', !!styleSelect);
          styleSelect?.addEventListener('change', function(e) {
            const selectedStyle = e.target.value;
            console.log('Style changed:', selectedStyle);
            const citationText = container.querySelector('[data-citation-text]');
            if (citationText && window.citationHelpers?.styles) {
              try {
                // Get the style function and apply it
                const styleFunction = window.citationHelpers.styles[selectedStyle];
                if (styleFunction) {
                  const newCitation = styleFunction(window.citationHelpers.frontmatter);
                  citationText.textContent = newCitation;
                  console.log('Citation updated successfully');
                } else {
                  console.error('Style function not found:', selectedStyle);
                }
              } catch (err) {
                console.error('Failed to generate citation:', err);
              }
            }
          });

          // Copy button
          const copyButton = container.querySelector('button[data-citation-copy]');
          console.log('Copy button found:', !!copyButton);
          copyButton?.addEventListener('click', async function() {
            console.log('Copy button clicked');
            const citationText = container.querySelector('[data-citation-text]')?.textContent;
            if (citationText) {
              try {
                await navigator.clipboard.writeText(citationText);
                this.textContent = 'Copied!';
                setTimeout(() => this.textContent = 'Copy', 2000);
              } catch (err) {
                console.error('Copy failed:', err);
              }
            }
          });

          // Export format selector
          const exportSelect = container.querySelector('select[data-citation-export]');
          console.log('Export select found:', !!exportSelect);
          exportSelect?.addEventListener('change', function(e) {
            console.log('Export format changed:', e.target.value);
            const format = e.target.value;
            if (format === 'bibtex' || format === 'ris') {
              try {
                const exportText = window.citationHelpers.exportFormat(
                  format,
                  window.citationHelpers.frontmatter
                );
                navigator.clipboard.writeText(exportText);
                alert(format.toUpperCase() + ' format copied to clipboard!');
              } catch (err) {
                console.error('Export failed:', err);
              }
              e.target.value = 'text';
            }
          });
          console.log('All event listeners attached successfully');
        } catch (error) {
          console.error('Error in init script:', error);
        }
      });
    `

    return (
      <div style={{
        margin: '1rem 0',
        padding: '1rem',
        border: '1px solid var(--dark)',
        borderRadius: '10px',
        backgroundColor: 'var(--lightgray)'
      }}>
        <div id={containerId} style={{
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '0.5rem',
          }}>
            <select 
              data-citation-style 
              style={{
                fontFamily: "MonaspaceNeon",
                fontSize: '0.7rem',
                minWidth: '80px',
                padding: '0.25rem 0.5rem 0.15rem',
                border: '1px solid var(--dark)',
                borderRadius: '5px',
                backgroundColor: 'var(--light)',
                cursor: 'pointer'
              }}
            >
              <option value="apa">APA</option>
              <option value="mla">MLA</option>
              <option value="chicago">Chicago</option>
              <option value="ieee">IEEE</option>
              <option value="harvard">Harvard</option>
            </select>
            
            <select 
              data-citation-export 
              style={{
                fontFamily: "MonaspaceNeon",
                fontSize: '0.7rem',
                minWidth: '80px',
                padding: '0.25rem 0.5rem 0.15rem',
                border: '1px solid var(--dark)',
                borderRadius: '5px',
                backgroundColor: 'var(--light)',
                cursor: 'pointer'
              }}
            >
              <option value="text">Export</option>
              <option value="bibtex">BibTeX</option>
              <option value="ris">RIS</option>
            </select>
            
            <button 
              data-citation-copy 
              type="button"
              style={{
                fontFamily: "MonaspaceNeon",
                fontSize: '0.7rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0.5rem 0.15rem',
                border: '1px solid var(--dark)',
                borderRadius: '5px',
                backgroundColor: 'var(--light)',
                cursor: 'pointer'
              }}
            >
              Copy
            </button>
          </div>
          
          <div 
            data-citation-text 
            style={{
              fontFamily: 'var(--codeFont)',
              fontSize: '0.8rem',
              lineHeight: '1.2rem',
              backgroundColor: 'var(--lightgray)',
              borderRadius: '4px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {citationStyles[defaultStyle](fileData.frontmatter as CitationFields, locale as ValidLocale)}
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: helperScript }} />
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </div>
    )
  }

  return CitationGenerator
}) as QuartzComponentConstructor

// Helper functions for formatting
function formatAuthorAPA(author: string | string[]): string {
  if (Array.isArray(author)) {
    return author.join(", ")
  }
  return author
}

function formatAuthorMLA(author: string | string[]): string {
  if (Array.isArray(author)) {
    return author.join(", ")
  }
  return author
} 