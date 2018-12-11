/* eslint-disable import/no-unresolved */
import * as types from 'actions/actionTypes';
import { DEFAULT_HOME } from 'utils/constants';

const initialState = {
  isLoading: true,
  errorBooks: false,
  books: [],
  pagination: [],
  menuItemSelected: DEFAULT_HOME,
  showSummary: false,
  showDropDown: false,
  isSmallLogo: false,
  bookSelected: '',
}

export default function booksReducer (state = initialState, action = {}) {
  switch(action.type) {
    case types.CHANGE_LOGO_ICON:
      return {...state, isSmallLogo: action.payload};
    case types.SHOW_DROPDOWN:
      return {...state, showDropDown: !state.showDropDown};
    default:
      return state;
  }
}