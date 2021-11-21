import { combineReducers } from "redux";
import contactsType from "./contacts-type";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case contactsType.INITCONTACTS:
      return [...payload];

    case contactsType.ADDCONTACTS:
      const sameContact = state.find(
        (contact) => contact.name === payload.name
      );
      if (sameContact) {
        alert(`${payload.name} is already in contacts`);
        return;
      }
      return [payload, ...state];

    case contactsType.DELETECONTACTS:
      return [...state.filter((item) => item.id !== payload)];

    default:
      return state;
  }
};

const filtersReducer = (state = "", { type, payload }) => {
  switch (type) {
    case contactsType.FILTERCONTACTS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filtersReducer,
});
