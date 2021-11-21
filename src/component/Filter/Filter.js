import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilters } from "../../redux/contacts/contacts-actions";

const Filter = ({ filter, onChangeFilters }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilters}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilters: (e) => dispatch(changeFilters(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
