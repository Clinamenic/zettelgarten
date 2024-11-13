import { QuartzComponentConstructor, QuartzComponent, QuartzComponentProps } from "./types"

interface FlexContainerOptions {
  components: QuartzComponent[]
}

export default ((opts?: FlexContainerOptions) => {
  const FlexContainer: QuartzComponent = (props: QuartzComponentProps) => {
    if (!opts?.components || opts.components.length === 0) {
      console.log("No components provided to FlexContainer")
      return null
    }

    return (
      <div className="flex-container">
        {opts.components.map((Component, index) => (
          <div key={index} className="flex-item">
            <Component {...props} />
          </div>
        ))}
      </div>
    )
  }

  // Add required properties
  FlexContainer.css = `
    .flex-container {
      display: flex;
      gap: 1.5rem;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
      margin: 1.5rem 0;
    }

    .flex-item {
      flex: 1;
      min-width: 300px;

      div {
        margin: 0rem 0rem !important;
      }
    }

    @media (max-width: 768px) {
      .flex-container {
        flex-direction: column;
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