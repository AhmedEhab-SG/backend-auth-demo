const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  role: {
    type: [String],
    default: ["read"],
  },
  isAdmin: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
