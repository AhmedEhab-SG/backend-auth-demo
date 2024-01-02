const joi = require("joi");

const validateInsertUpdateBook = (book) => {
  const schema = joi.object({
    title: joi.string().min(3).max(50).required(),
    author: joi.string().min(3).max(50),
    genre: joi.string().min(3).max(50),
    year: joi.date(),
  });
  return schema.validate(book);
};

module.exports = { validateInsertUpdateBook };
