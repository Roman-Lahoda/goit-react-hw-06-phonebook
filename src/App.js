import s from "./App.module.css";
import ContactsForm from "./component/ContactsForm";
import Filter from "./component/Filter";
import ContactsList from "./component/ContactsList";
import { connect, useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <div className={s.phonebook}>
      <h1 className={s.pageTitle}>Phonebook</h1>
      <ContactsForm />
      {contacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactsList />
    </div>
  );
}

export default connect()(App);
