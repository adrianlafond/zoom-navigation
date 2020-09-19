export class ZoomNavigation {
  constructor() {
    const el: HTMLDivElement = document.createElement('p');
    el.className = 'zoom-navigation';
    el.textContent = 'ZOOM';
    document.body.appendChild(el);
  }
}
