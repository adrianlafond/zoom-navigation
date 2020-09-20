export class ZoomNavigation {
  constructor () {
    const el: HTMLDivElement = document.createElement('p')
    el.className = 'zoom-navigation'
    el.textContent = 'ZOOM NAVIGATION'
    document.body.appendChild(el)
  }
}
