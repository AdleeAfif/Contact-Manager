const { Schema } = require("mongoose");

const { dbConnection } = require("../configs/dbConnection");

const contactSchema = new Schema({
  name: { type: String, required: [true, "Please add the contact name"] },
  email: { type: String, required: [true, "Please add contact email address"] },
  phone: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, required: true },
});

const Contact = dbConnection.model("Contact", contactSchema);

module.exports = Contact;
