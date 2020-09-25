import './style/index.scss'

export interface TextDocument {
  text: string;
}

export interface Documents {
  next: () => Promise<TextDocument>
}

export class ZoomNavigation {
  constructor(private documents: Documents) {
    this.printSomething()
    this.addDocument()
  }

  printSomething() {
    const el: HTMLDivElement = document.createElement('p')
    el.className = 'zoom-navigation'
    el.textContent = 'ZOOM NAVIGATION'
    document.body.appendChild(el)
  }

  addDocument() {
    this.documents.next().then((doc: TextDocument) => {
      const { text } = doc;
      if (text) {
        console.log(text);
      }
      this.addDocument();
    }).catch(() => {
      console.log('-- done --');
    });
  }
}
