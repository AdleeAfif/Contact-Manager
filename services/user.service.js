const User = require("../models/user.model");

const createUser = async (payload) => {
  return User.create(payload);
};

const findOneUser = async (searchQuery) => {
  return await User.findOne({ email: searchQuery });
};

module.exports = { createUser, findOneUser };
