import { useEffect } from "react";
import s from "./App.module.css";
import ContactsForm from "./component/ContactsForm";
import Filter from "./component/Filter";
import ContactsList from "./component/ContactsList";
import { connect } from "react-redux";
import * as actions from "./redux/contacts/contacts-actions";

function App({ contacts, initContactsFromLS, onDeleteContact }) {
  useEffect(() => {
    initContactsFromLS(
      JSON.parse(window.localStorage.getItem("contacts")) || []
    );
  }, [initContactsFromLS]);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts.items));
  }, [contacts.items]);

  return (
    <div className={s.phonebook}>
      <h1 className={s.pageTitle}>Phonebook</h1>
      <ContactsForm />
      {contacts.items.length > 0 && <h2 className={s.title}>Contacts</h2>}
      {contacts.items.length > 1 && <Filter />}
      <ContactsList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: {
      items: state.contacts.items,
      filters: state.contacts.filters,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initContactsFromLS: (contacts) =>
      dispatch(actions.initContactsFromLS(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
