import * as faker from 'faker'
import { TextDocument } from '../zoom-navigation'

export class Documents {
  private cursor = 0;

  constructor(private total: number) {}

  [Symbol.iterator]() {
    return this
  }

  next() {
    return new Promise((resolve: (doc: TextDocument) => void, reject: () => void) => {
      this.cursor += 1
      if (this.cursor < this.total) {
        resolve({
          text: faker.lorem.paragraphs(Math.ceil(Math.random() * 12) + 1)
        })
      } else {
        reject()
      }
    })
  }
}
