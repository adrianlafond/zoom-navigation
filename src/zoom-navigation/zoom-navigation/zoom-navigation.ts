import { ZoomCanvas } from '../zoom-canvas'

import './zoom-navigation.scss'

export interface TextDocument {
  done: boolean;
  value?: {
    text: string;
  }
}

export interface Documents {
  next: () => Promise<TextDocument>
}

export class ZoomNavigation {
  private canvas: ZoomCanvas;

  constructor(private rootElement: HTMLElement, private documents: Documents) {
    this.canvas = new ZoomCanvas(rootElement)
    this.addDocument()
  }

  private addDocument() {
    this.documents.next().then((doc: TextDocument) => {
      const { done, value } = doc
      if (value) {
        // console.log(value.text);
      }
      if (!done) {
        this.addDocument()
      }
    }).catch((error: Error) => {
      throw error
    })
  }

  destroy() {
    this.canvas.destroy()
  }
}
