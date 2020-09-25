import './style/index.scss'

export interface TextDocument {
  done: boolean;
  value: {
    text: string | undefined;
  }
}

export interface Documents {
  next: () => TextDocument
}

export class ZoomNavigation {
  constructor (private documents: Documents) {
    this.printSomething()
    console.log(this.documents.next())
    console.log(this.documents.next())
    console.log(this.documents.next())
  }

  printSomething () {
    const el: HTMLDivElement = document.createElement('p')
    el.className = 'zoom-navigation'
    el.textContent = 'ZOOM NAVIGATION'
    document.body.appendChild(el)
  }
}
