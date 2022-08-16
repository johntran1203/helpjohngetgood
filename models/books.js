
const { Schema, model } = require("mongoose");


// the strcuture of our documents
const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publish_date: { type: String, required: true },
    publisher_id: { type: Schema.Types.ObjectId, ref: "Publisher", required: true },
  },
  { timestamps: true }
);

module.exports = model("Book", bookSchema);