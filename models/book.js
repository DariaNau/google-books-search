const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [String],
  description: String,
  // url string for image
  image: {
    type: String,
    default: "",
  },
  // url for book web page - unique index
  link: {
    type: String,
    default: "",
    unique: true,
  },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
