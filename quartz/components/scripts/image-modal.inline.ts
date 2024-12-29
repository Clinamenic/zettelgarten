function createImageModal() {
  console.log("Creating image modal elements")
  // Create modal elements
  const modalOuter = document.createElement('div')
  modalOuter.className = 'image-modal-outer'
  
  const modalContainer = document.createElement('div')
  modalContainer.className = 'image-modal-container'
  
  const modalContent = document.createElement('div')
  modalContent.className = 'image-modal-content'
  
  const closeButton = document.createElement('button')
  closeButton.className = 'close-button'
  closeButton.setAttribute('aria-label', 'Close image')
  
  // Append elements
  modalContainer.appendChild(closeButton)
  modalContainer.appendChild(modalContent)
  modalOuter.appendChild(modalContainer)
  document.body.appendChild(modalOuter)
  
  console.log("Modal elements created and appended to body")
  return {
    modalOuter,
    modalContainer,
    modalContent,
    closeButton
  }
}

function initializeImageModal() {
  console.log("Initializing image modal")
  const { modalOuter, modalContainer, modalContent, closeButton } = createImageModal()
  
  // Handle clicking on gallery images
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    console.log("Click event detected on:", target)
    console.log("Target classList:", target.classList)
    
    if (target.classList.contains('gallery-img')) {
      console.log("Gallery image clicked!")
      const img = target as HTMLImageElement
      const caption = img.closest('.text-box')?.querySelector('p')?.textContent
      console.log("Caption found:", caption)
      
      // Create new image for modal
      const modalImg = document.createElement('img')
      modalImg.src = img.src
      modalImg.alt = img.alt
      
      // Clear and update modal content
      modalContent.innerHTML = ''
      modalContent.appendChild(modalImg)
      
      if (caption) {
        const captionElement = document.createElement('p')
        captionElement.textContent = caption
        modalContent.appendChild(captionElement)
      }
      
      // Show modal with animation
      modalOuter.classList.add('active')
      setTimeout(() => modalContainer.classList.add('active'), 10)
      console.log("Modal activated")
    }
  })
  
  // Close modal when clicking outside or on close button
  function closeModal() {
    console.log("Closing modal")
    modalContainer.classList.remove('active')
    setTimeout(() => modalOuter.classList.remove('active'), 300)
  }
  
  modalOuter.addEventListener('click', (e) => {
    if (e.target === modalOuter) {
      closeModal()
    }
  })
  
  closeButton.addEventListener('click', closeModal)
  
  // Clean up event listeners on navigation
  window.addCleanup?.(() => {
    console.log("Cleaning up modal")
    modalOuter.remove()
  })
}

// Instead of immediately calling initializeImageModal
document.addEventListener("nav", () => {
  console.log("Navigation event detected, initializing modal")
  initializeImageModal()
})

window.addCleanup?.(() => {
  const modalOuter = document.querySelector('.image-modal-outer')
  if (modalOuter) {
    console.log("Cleaning up modal on page change")
    modalOuter.remove()
  }
})

export default null 