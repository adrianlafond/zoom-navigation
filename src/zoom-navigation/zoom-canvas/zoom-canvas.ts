import './zoom-canvas.scss'

export class ZoomCanvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private zoomLevel = 1.0;
  private resizeObserver: ResizeObserver;
  private text: string;

  constructor(private element: HTMLElement) {
    this.canvas = this.createCanvas()
    this.context = this.canvas.getContext('2d')
    this.initializeResizeObserver()
    this.zoom(0.5)
  }

  renderTextDocument(text: string) {
    this.text = text
    this.context.font = '24px Menlo,monospace'
    this.context.fillStyle = '#ffffff'
    console.log(text);

    const words = text.split(' ')
    let printLine = ''
    let testLine = ''
    let y = 100

    const print = () => {
      testLine = ''
      this.context.fillText(printLine.trim(), 100, y)
      y += 36
    }

    while (words.length) {
      const word = words.shift()
      printLine = testLine
      if (this.context.measureText(testLine).width < 360) {
        testLine += word + ' '
        if (word.endsWith('\n')) {
          printLine = testLine
          print()
          y += 36
        }
      } else {
        words.unshift(word)
        print()
      }
    }
  }

  private createCanvas() {
    const el = document.createElement('canvas')
    el.className = 'zoom-navigation__canvas'
    this.element.appendChild(el)
    return el
  }

  private zoom(value: number) {
    this.zoomLevel = value
    this.element.style.transformOrigin = '0 0 '
    this.element.style.transform = `scale(${this.zoomLevel})`
  }

  private resize() {
    this.canvas.width = this.element.clientWidth / this.zoomLevel
    this.canvas.height = this.element.clientHeight / this.zoomLevel
    if (this.text) {
      this.renderTextDocument(this.text)
    }
  }

  private initializeResizeObserver() {
    this.resizeObserver = new window.ResizeObserver(() => this.resize())
    this.resizeObserver.observe(this.element)
  }

  destroy() {
    this.resizeObserver.unobserve(this.element)
  }
}
