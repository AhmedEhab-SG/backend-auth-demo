require("dotenv/config");
require("./db/db.index");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const booksRouter = require("./router/books.router");
const userRouter = require("./router/user.router");
const { auth } = require("./auth/auth");

app.use(express.json());
app.use(cors());

app.use(express.static("../frontend/public"));

app.use("/api/users", userRouter);
app.use(auth);

app.use("/api/books", booksRouter);

const port = process.env.PORT;

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });
});
