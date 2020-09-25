import * as faker from 'faker'

export class Documents {
  private cursor = 0;

  constructor (private total: number) {}

  [Symbol.iterator] () {
    return this
  }

  next () {
    return this.cursor++ < this.total ? {
      done: false,
      value: {
        text: faker.lorem.paragraphs(Math.ceil(Math.random() * 12) + 1)
      }
    } : {
      done: true,
      value: undefined
    }
  }
}
