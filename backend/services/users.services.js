const User = require("../models/user.model");

const getUsers = async () => {
  try {
    return await User.find().exec();
  } catch (error) {
    throw new Error("something went wrong at getUsers", error);
  }
};

const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email }).exec();
  } catch (error) {
    throw new Error("something went wrong at getUsersByEmail", error);
  }
};

const getHashPasswordByEmail = async (email) => {
  try {
    return await User.find({ email }, { passwordHash: 1 }).exec();
  } catch (error) {
    throw new Error("something went wrong at getHashPasswordByEmail", error);
  }
};

const updateHashPasswordById = async (email, newHashPassowrd) => {
  try {
    const { passwordHash } = await getHashPasswordByEmail(email);
    return await Book.updateOne({ passwordHash }, newHashPassowrd);
  } catch (error) {
    throw new Error("something went wrong at updateHashPasswordById", error);
  }
};

const createUserService = async ({ name, email, passwordHash }) => {
  try {
    return await User.create({ name, email, passwordHash });
  } catch (error) {
    throw new Error("something went wrong at createUserService", error);
  }
};

module.exports = {
  getUsers,
  getUserByEmail,
  getHashPasswordByEmail,
  updateHashPasswordById,
  createUserService,
};
