const express = require("express");
const {
  createNewUser,
  loginUser,
  getAllUsers,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/", getAllUsers);

router.post("/register", createNewUser);
router.post("/login", loginUser);

module.exports = router;
