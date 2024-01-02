const { validateInsertUpdateBook } = require("../validations/books.validation");

const checkForError = (req, res) => {
  const book = req.body;
  const { error, value } = validateInsertUpdateBook(book);
  if (error) {
    res.status(400).send({ errorMessage: `Invalid Form Feild ${error}` });
    return;
  }
  return value;
};

const checkEmptyUserPass = (email, password) => {
  if (!email || !password)
    return res.status(422).send("Wrong email or passwrod! ");
};

const checkAlreadyExists = (user, res) => {
  if (user)
    return res.send(
      "This email is already exist, please choose another email.."
    );
};

module.exports = { checkForError, checkEmptyUserPass, checkAlreadyExists };
