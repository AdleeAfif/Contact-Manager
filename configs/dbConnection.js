const { createConnection } = require("mongoose");

const dbConnection = createConnection(process.env.MONGODB_URI, {
  dbName: "contact-manager-db",
});

module.exports = { dbConnection };
