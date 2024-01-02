const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../services/users.services");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (!token) return res.status(401).send({ message: "unauthorized access" });

    const payload = jwt.verify(token, process.env.SECRET);

    const { email } = payload;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).send({ message: "unauthorized user" });
    }

    next();
  } catch (error) {
    return res.status(401).send({ message: "unauthorized user" });
  }
};

module.exports = { auth };
