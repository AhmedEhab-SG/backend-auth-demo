const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@db-demo.woh0izt.mongodb.net/demo`;

const dbConnection = mongoose
  .connect(dbUrl)
  .then(() => console.log("conntect to Db Server"))
  .catch((error) => console.log("failed to connect to db", error));

module.exports = dbConnection;
