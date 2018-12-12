/* eslint-disable import/no-unresolved */
import * as types from 'constants/bookTypes';
import { DEFAULT_HOME } from 'utils/constants';

const initialState = {
  isLoading: true,
  errorBooks: '',
  books: [],
  pagination: {
    totalPages: 1,
    currentPage: 1,
  },
  menuItemSelected: DEFAULT_HOME,
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
    case types.REQUEST_BOOKS:
      return{
        ...state,
        isLoading: true,
        errorBooks: '',
        books:[],
      }
    case types.SUCCESS_BOOKS:
      return {
        ...state,
        isLoading: false,
        errorBooks: '',
        books: action.payload.books,
        pagination:action.payload.pagination
      }
    case types.FAIL_BOOKS:
      return{
        ...state,
        isLoading: false,
        errorBooks: action.payload,
        books:[],
        pagination:{
          totalPages: 1,
          currentPage: 1,
        }
      }
    default:
      return state;
  }
}