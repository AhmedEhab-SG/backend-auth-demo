const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  author: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  genre: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  year: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
