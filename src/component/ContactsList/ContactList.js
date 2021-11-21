import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { connect } from "react-redux";
import { onDeleteContact } from "../../redux/contacts/contacts-actions";

const ContactsList = ({ contacts, onDeleteContact }) => {
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
                onDeleteContact(item.id);
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

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(onDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
