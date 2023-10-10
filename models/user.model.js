const { Schema } = require("mongoose");
const bcryptjs = require("bcryptjs");

const { dbConnection } = require("../configs/dbConnection");

const userSchema = new Schema({
  username: { type: String, required: [true, "Please add the username"] },
  email: { type: String, required: [true, "Please add user email address"] },
  password: { type: String, required: [true, "Please add the user password"] },
  timestamp: { type: Date, required: true },
});

userSchema.pre("save", async function (next) {
  const user = this;
  // Hash the password only if it's modified (or new)
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(user.password, salt);

    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = dbConnection.model("User", userSchema);

module.exports = User;
