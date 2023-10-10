const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ message: "Log In is required before continuing" });

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ message: "Forbidden Request: Invalid token" });
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
