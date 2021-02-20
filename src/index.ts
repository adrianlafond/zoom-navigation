import { Documents } from './data'
import { ZoomNavigation } from './zoom-navigation'

let zoomNav: ZoomNavigation

window.addEventListener('load', () => {
  const documents = new Documents(100)

  // eslint-disable-next-line no-new
  zoomNav = new ZoomNavigation(document.querySelector('main'), documents)
})

window.addEventListener('unload', () => {
  if (zoomNav) {
    zoomNav.destroy()
  }
})
