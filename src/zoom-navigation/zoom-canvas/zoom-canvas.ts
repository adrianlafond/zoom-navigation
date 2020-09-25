import './zoom-canvas.scss'

export class ZoomCanvas {
  private canvas: HTMLCanvasElement;

  constructor(private element: HTMLElement) {
    this.canvas = this.createCanvas();
  }

  createCanvas() {
    const el = document.createElement('canvas');
    el.className = 'zoom-navigation__canvas';
    this.element.appendChild(el);
    return el;
  }
}