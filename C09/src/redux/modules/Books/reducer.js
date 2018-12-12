/* eslint-disable import/no-unresolved */
import * as types from 'constants/bookTypes';
import { DEFAULT_HOME } from 'utils/constants';

const initialState = {
  isLoading: true,
  errorBooks: false,
  books: [],
  pagination: [],
  menuItemSelected: DEFAULT_HOME,
  showSummary: false,
  showDropDown: false,
  openNavMenu: false,
  isSmallLogo: false,
  bookSelected: '',
}

export default function booksReducer (state = initialState, action = {}) {
  switch(action.type) {
    case types.CHANGE_LOGO_ICON:
      return {...state, isSmallLogo: action.payload};
    case types.SHOW_DROPDOWN:
      return {...state, showDropDown: !state.showDropDown};
    case types.OPEN_NAV:
      return {...state, openNavMenu: !state.openNavMenu};
    case types.SHOW_SUMMARY:
      return {...state, showSummary: !state.showSummary};
    case types.NAV_ITEM_SELECTED:
      return {...state, menuItemSelected: action.payload};
    case types.BOOK_SELECTED:
      return {...state, bookSelected: action.payload};
    default:
      return state;
  }
}