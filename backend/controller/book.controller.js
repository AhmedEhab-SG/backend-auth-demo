const {
  insertBook,
  getBookByIdServ,
  updateBookById,
  getDeleteBook,
  getFiveBooksServ,
} = require("../services/books.services");
const { validateInsertUpdateBook } = require("../validations/books.validation");

const getFiveBooks = async (req, res) => {
  try {
    const fiveBooks = await getFiveBooksServ();
    res.send(fiveBooks);
  } catch (error) {
    throw new Error("something went worng at find5books", error);
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = validateInsertUpdateBook(id);

    if (!error)
      return res
        .status(404)
        .send("somthing went wrong check if the id is correct");

    const book = await getBookByIdServ(id);
    res.send(book);
  } catch (error) {
    throw new Error("something went worng at getBookById", error);
  }
};

const insertBooks = async (req, res) => {
  try {
    const book = req.body;
    const { error, value } = validateInsertUpdateBook(book);
    if (error) {
      return res
        .status(400)
        .send({ errorMessage: `Invalid form feild ${error}` });
    }
    const newBook = await insertBook(book);
    res.status(201).send(newBook);
  } catch (error) {
    throw new Error("something went worng at inserbooks", error);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await getBookByIdServ(id, req.body);
    if (!book) return res.status(404).send("the book doesnt exiest");

    const { error, value } = validateInsertUpdateBook(req.body);
    if (error) {
      return res
        .status(400)
        .send({ errorMessage: `Invalid form feild ${error}` });
    }

    const updateBook = await updateBookById(id, req.body);
    res.send(updateBook);
  } catch (error) {
    throw new Error("something went worng at updateBook", error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await getBookByIdServ(id, req.body);
    if (!book) return res.status(404).send("the book doesnt exiest");

    await getDeleteBook(id);
    res.send(book);
  } catch (error) {
    throw new Error("something went worng at deletedBook", error);
  }
};

module.exports = {
  getFiveBooks,
  getBookById,
  insertBooks,
  updateBook,
  deleteBook,
};
