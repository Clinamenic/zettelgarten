import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  position: fixed;
  top: 0;
  left: calc((100vw - 750px) / 2);
  right: calc((100vw - 750px) / 2);
  z-index: 1000;
  background-color: var(--light);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 1.5rem;
  border-top: 0px solid var(--dark);
  border-right: 1px solid var(--dark);
  border-left: 1px solid var(--dark);
  border-bottom: 1px solid var(--dark);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.3s ease;
}
@media only screen and (max-width: 750px) {
  header {
    left: 1rem;
    right: 1rem;
  }
}

header h1 {
  margin: 0;
  flex: auto;
}
`

Header.afterDOMLoaded = `
  const header = document.getElementById('quartz-header')
  const content = document.querySelector('.container') // Adjust this selector to match your content container

  function adjustHeader() {
    if (header && content) {
      const rect = content.getBoundingClientRect()
      header.style.left = rect.left + 'px'
      header.style.right = (window.innerWidth - rect.right) + 'px'
      header.style.width = rect.width + 'px'
    }
  }

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })

    window.addEventListener('resize', adjustHeader)
    adjustHeader() // Initial adjustment
  }
`

export default (() => Header) satisfies QuartzComponentConstructor
