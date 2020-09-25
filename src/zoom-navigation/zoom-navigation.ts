import './style/index.scss'

export interface TextDocument {
  text: string;
}

export interface Documents {
  next: () => Promise<TextDocument>
}

export class ZoomNavigation {
  constructor(private element: HTMLElement, private documents: Documents) {
    this.addDocument()
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
