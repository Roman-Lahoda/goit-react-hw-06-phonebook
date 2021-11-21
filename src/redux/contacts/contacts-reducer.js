import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filtersReducer = createReducer("", {
  [actions.changeFilters]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filtersReducer,
});
