// connect to mongoose which is our db
const mongoose = require('mongoose')

//build a connection to our db locally
mongoose
    .connect('mongodb://127.0.0.1:27017/books')
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch((e) => console.error("Connection error", e.message));
  
  const db = mongoose.connection;
  
  // where there is an error log an error
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  
  // use our connection outisde the db
  module.exports = db;