class BookShelf {
  #max
  #section

  constructor(book = null, max = 10) {
    this.#section = new Array(3)
    this.#max = max
    if (book === null) return
  }

  addBook(book) {
    // @TODO iterate #section until empty book space
  }
}
