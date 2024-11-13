import { QuartzComponentConstructor, QuartzComponent, QuartzComponentProps } from "./types"

interface FlexContainerOptions {
  components: QuartzComponent[]
  showFlex?: (frontmatter: any) => boolean
}

export default ((opts?: FlexContainerOptions) => {
  const FlexContainer: QuartzComponent = (props: QuartzComponentProps) => {
    if (opts?.showFlex && !opts.showFlex(props.frontmatter ?? {})) {
      return null
    }

    if (!opts?.components || opts.components.length === 0) {
      console.log("No components provided to FlexContainer")
      return null
    }

    return (
      <div className="flex-container">
        <div className="flex-content">
          {opts.components.map((Component, index) => (
            <div key={index} className="flex-item">
              <div className="flex-item-inner">
                <Component {...props} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  FlexContainer.css = `
    .flex-container {
      width: 100%;
      margin: 1.5rem 0;
    }

    .flex-content {
      display: flex;
      gap: 1.5rem;
      justify-content: space-between;
      box-sizing: border-box;
      min-height: 144px;
    }

    .flex-item {
      flex: 1;
      min-width: 300px;
      display: flex;
      box-sizing: border-box;
    }

    .flex-item-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      
      & > div {
        box-sizing: border-box;
        flex: 1;
        margin: 0 !important;
        display: flex;
      }

      & > div > * {
        box-sizing: border-box;
        flex: 1;
        margin: 0;
      }

      & > div > .quartz-license-info {
        padding: 0.75rem 1rem;
      }
    }

    @media (max-width: 768px) {
      .flex-content {
        flex-direction: column;
        min-height: auto;
      }
      
      .flex-item {
        width: 100%;
        min-width: 100%;
      }
    }
  `
  
  FlexContainer.beforeDOMLoaded = undefined
  FlexContainer.afterDOMLoaded = undefined

  return FlexContainer
}) satisfies QuartzComponentConstructor