import { Documents } from './data'
import { ZoomNavigation } from './zoom-navigation'

window.addEventListener('load', () => {
  const documents = new Documents(100)

  // eslint-disable-next-line no-new
  new ZoomNavigation(document.querySelector('main'), documents)
})
