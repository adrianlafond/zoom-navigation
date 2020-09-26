import './zoom-canvas.scss'

export class ZoomCanvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private zoomLevel = 1.0;

  constructor(private element: HTMLElement) {
    this.canvas = this.createCanvas()
    this.context = this.canvas.getContext('2d')
    this.zoom(0.5)
    this.resize()
    this.drawSomething()
  }

  private createCanvas() {
    const el = document.createElement('canvas')
    el.className = 'zoom-navigation__canvas'
    this.element.appendChild(el)
    return el
  }

  private drawSomething() {
    this.context.beginPath()
    this.context.arc(60, 60, 50, 0, Math.PI * 2)
    this.context.fillStyle = '#ffffff'
    this.context.fill()
  }

  private zoom(value: number) {
    this.zoomLevel = value;
    this.element.style.transformOrigin = '0 0 '
    this.element.style.transform = `scale(${this.zoomLevel})`
  }

  private resize() {
    this.canvas.width = this.element.clientWidth / this.zoomLevel
    this.canvas.height = this.element.clientHeight / this.zoomLevel
  }
}
