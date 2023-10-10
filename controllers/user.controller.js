const asyncHandler = require("express-async-handler");

const { createUser, findOneUser } = require("../services/user.service");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username && email && password)) {
    res.status(400).json({ msg: "Please enter all fields!" });
    throw new Error("Required fields is/are missing");
  }

  const userExist = await findOneUser(email);

  if (userExist) {
    res.status(409);
    throw new Error("Entered email already exists");
  }

  const newUser = {
    ...req.body,
    timestamp: new Date(),
  };

  const userCreated = await createUser(newUser);

  res.status(201).json(userCreated);
});

const currentUser = async (req, res) => {
  const user = await findOneUser(req.user.email);
  if (!user) {
    res.status(404);
    throw new Error("User credentials not found!");
  }
  res.json(user);
};

module.exports = { registerUser, currentUser };
