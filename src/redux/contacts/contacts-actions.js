import actionsType from "./contacts-type";

export const initContactsFromLS = (contacts) => ({
  type: actionsType.INITCONTACTS,
  payload: contacts,
});

export const onAddContact = (contact) => ({
  type: actionsType.ADDCONTACTS,
  payload: contact,
});

export const onDeleteContact = (contactId) => ({
  type: actionsType.DELETECONTACTS,
  payload: contactId,
});

export const changeFilters = (string) => ({
  type: actionsType.FILTERCONTACTS,
  payload: string,
});
