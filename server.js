const express = require("express");
const dotenv = require("dotenv").config();

const { router } = require("./routers");
const errorHandler = require("./middlewares/errorHandler.middleware");

const app = express();
app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
