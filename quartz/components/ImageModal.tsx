import { QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/image-modal.inline"

export default (() => {
  function ImageModal() {
    return null
  }

  ImageModal.afterDOMLoaded = script
  return ImageModal
}) satisfies QuartzComponentConstructor 