const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const authenticateUser = expressAsyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) throw new Error("User doesn't exist in the system");
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) throw new Error("Bad Request: Mismatch Credentials");

    const id = user.id;
    const options = {
      expiresIn: "1h", // Token expiration time (optional)
    };

    const token = jwt.sign({ id, email }, process.env.SECRET_TOKEN, options);
    res.json({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = { authenticateUser };
