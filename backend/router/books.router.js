const express = require("express");
const router = express.Router();

const {
  getFiveBooks,
  getBookById,
  insertBooks,
  updateBook,
  deleteBook,
} = require("../controller/book.controller");

router.get("/", getFiveBooks);

router.get("/:id", getBookById);

router.post("/", insertBooks);

router.patch("/", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
