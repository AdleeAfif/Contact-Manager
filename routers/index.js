const { Router } = require("express");

const userRouter = require("./user.router");
const contactRouter = require("./contact.router");

const router = Router();

router.route("/").get((req, res) => {
  console.log("This is the default route for Contact Manager");
  res.json({ msg: "This is the default route for Contact Manager" });
});

router.use("/users", userRouter);
router.use("/contacts", contactRouter);

module.exports = { router };
