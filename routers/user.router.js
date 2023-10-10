const { Router } = require("express");
const { registerUser, currentUser } = require("../controllers/user.controller");
const {
  authenticateUser,
} = require("../middlewares/access-control.middleware");
const { authenticateToken } = require("../utils/jwt.util");

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(authenticateUser);
router.route("/current").get(authenticateToken, currentUser);

module.exports = router;
