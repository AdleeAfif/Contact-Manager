const Contact = require("../models/contact.model");

const findManyContact = async (searchParams) => {
  return await Contact.find({ ...searchParams });
};

const createNewContact = async (payload) => {
  return await Contact.create(payload);
};

const findContactById = async (searchParams) => {
  return await Contact.findById({ _id: searchParams });
};

const updateContactById = async (searchParams, payload) => {
  return await Contact.updateOne({ _id: searchParams }, payload);
};

const deleteContactById = async (searchParams) => {
  await Contact.deleteOne({ _id: searchParams });
};

module.exports = {
  findManyContact,
  createNewContact,
  findContactById,
  updateContactById,
  deleteContactById,
};
