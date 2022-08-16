const db = require("../db");
const Book = require("../models/book");
const Publisher = require("../models/publisher");

const seedBooks = async () => {
  const penguinBooks = await Publisher.find({ name: "Penguin Books" });
  const harperCollins = await Publisher.find({ name: "HarperCollins" });

  const books = [
    //Insert many books into our db
    {
      title: "The Wind Up Bird Chronicle",
      author: "Haruki Murakami",
      publish_date: "1997",
      publisher_id: penguinBooks[0]._id,
    },
    {
      title: "Zen and the Art of Motorcycle Maintenance",
      author: "Robert M. Pirsig",
      publish_date: "1999",
      publisher_id: harperCollins[0]._id,
    },
  ];

  await Book.insertMany(books);
  console.log("Created books with publishers!!");
};

// seeding
const run = async () => {
  await seedBooks();
  db.close();
};

run();