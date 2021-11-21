import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact");
const deleteContact = createAction("contacts/deleteContact");
const changeFilters = createAction("contacts/filterContact");

const actions = {
  addContact,
  deleteContact,
  changeFilters,
};
export default actions;
