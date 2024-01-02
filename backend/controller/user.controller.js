const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { checkEmptyUserPass } = require("../utils/functions");
const {
  getUserByEmail,
  createUserService,
  getUsers,
} = require("../services/users.services");

const createNewUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //if empty
    checkEmptyUserPass(email, password);

    const user = await getUserByEmail(email);

    if (user)
      return res.send(
        "This email is already exist, please choose another email.."
      );

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await createUserService({ name, email, passwordHash });

    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    checkEmptyUserPass(email, password);

    const user = await getUserByEmail(email);
    if (!user) return res.status(401).send("Incorrect email or password");

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword)
      return res.status(401).send({ message: "Incorrect email or password" });

    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "1h" });

    res.header({ token }).send({ token, message: "access granted" });
  } catch (error) {
    throw new Error(`something went wrong at loginUser ${error}`);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.send(allUsers);
  } catch (error) {
    throw new Error("something went wrong at getAllUsers", error);
  }
};

module.exports = { createNewUser, loginUser, getAllUsers };
