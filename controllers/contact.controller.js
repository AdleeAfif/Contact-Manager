const asyncHandler = require("express-async-handler");
const {
  findManyContact,
  createNewContact,
  findContactById,
  updateContactById,
  deleteContactById,
} = require("../services/contact.service");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await findManyContact({
    user: req.params.id ? req.params.id : req.user.id,
  });
  if (!contacts || contacts.length === 0)
    return res
      .status(200)
      .json({ msg: "No contact available. Create a contact and try again." });

  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!(name && email && phone)) {
    res.status(400);
    throw new Error("Required field is empty");
  }

  const contactData = {
    user: req.user.id,
    name,
    email,
    phone,
    timestamp: new Date(),
  };

  const newContact = await createNewContact(contactData);
  res
    .status(201)
    .json({ msg: "Contact added successfully!", addedContact: newContact });
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await findContactById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Entered contact cannot be found");
  }
  res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await findContactById(req.params.id);
  const { name, email, phone } = req.body;

  if (!contact) {
    res.status(404);
    throw new Error("Entered contact cannot be found");
  }

  await updateContactById(contact._id, {
    name,
    email,
    phone,
    timestamp: new Date(),
  });

  res.status(200).json({
    msg: "Contact successfully updated!",
  });
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await findContactById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Entered contact cannot be found");
  }

  await deleteContactById(contact._id);

  res.status(200).json({ msg: "Contact deleted successfully!" });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
