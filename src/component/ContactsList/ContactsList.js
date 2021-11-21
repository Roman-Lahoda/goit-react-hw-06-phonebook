import s from "./ContactList.module.css";
import actions from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import {
  getContacts,
  getFilter,
} from "../../redux/contacts/contacts-selectors";

const ContactsList = () => {
  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filter = useSelector(getFilter);
  const contacts = useSelector((state) =>
    getFilteredContacts(state.contacts.items, filter)
  );
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {contacts.map((item) => {
        return (
          <li key={item.id} className={s.contact}>
            <span>{item.name}:</span>
            <span>{item.number}</span>
            <button
              className={s.btn}
              type="button"
              onClick={() => {
                dispatch(actions.deleteContact(item.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
