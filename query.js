const db = require('./db');
const Publisher = require('./models/publisher');
const Book = require('./models/book')

const findBook = async () => {
  const book = Book.findOne({ title: 'The Wind Up Bird Chronicle' })
  console.log(book)
}

const createBook = async () => {
  const penguinBooks = await Publisher.find({name: 'Penguin Books'})
  console.log("penguin books", penguinBooks)
  const aNewEarth = new Book({
    title: 'A New Earth',
    author: 'Eckhart Tolle',
    publish_date: '2005',
    publisher_id: penguinBooks[0]._id
  })
  await aNewEarth.save()
  console.log("Created book: ", aNewEarth)
}

const updateBook = async () => {
  const updated = await Book.updateOne({name: 'Zen and the Art of Motorcycle Maintenance'}, { publish_date : "2005"})
  console.log(updated)
}

const deleteBook = async () => {
  const deleted = await Book.deleteOne({name: 'Zen and the Art of Motorcycle Maintenance'})
  console.log(deleted)
}


const run = async () => {
  // We must await each of these functions so that the whole task can finish before closing the database connection.
  await findBook()
  await createBook()
  await updateBook()
  await deleteBook()
  db.close()
}

run()

// Finda book
// create a book
// update a book
// delete a book