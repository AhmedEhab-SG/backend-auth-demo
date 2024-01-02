const Book = require("../models/book.model");

const getBookByIdServ = async (id) => {
  try {
    return await Book.find({ _id: id }).exec();
  } catch (error) {
    throw new Error("somthing went wrong in by id", error);
  }
};

const getFiveBooksServ = async () => {
  try {
    return await Book.find().limit(5);
  } catch (error) {
    throw new Error("somthing went wrong in find", error);
  }
};

const updateBookById = async (id, newBookObj) => {
  try {
    await Book.updateOne({ _id: id }, newBookObj);
    return await getBookById(id);
  } catch (error) {
    throw new Error("somthing went wrong in update", error);
  }
};

const insertBook = async (newBookObj) => {
  try {
    return await Book.create(newBookObj);
  } catch (error) {
    throw new Error("somthing went wrong in insert", error);
  }
};

const getDeleteBook = async (id) => {
  try {
    await Book.deleteOne({ _id: id });
  } catch (error) {
    console.log("couldnt delete:", error);
  }
};

module.exports = {
  getBookByIdServ,
  getFiveBooksServ,
  updateBookById,
  insertBook,
  getDeleteBook,
};
