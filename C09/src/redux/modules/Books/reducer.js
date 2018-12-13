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
  limitDate: null,
  menuItemSelected: DEFAULT_HOME,
  showDropDown: false,
  showLendI: false,
  openNavMenu: false,
  isSmallLogo: false,
  bookSelected: -1,
}

export default function booksReducer (state = initialState, action = {}) {
  switch(action.type) {
    case types.CHANGE_LOGO_ICON:
      return {...state, isSmallLogo: action.payload};
    case types.SHOW_DROPDOWN:
      return {...state, showDropDown: !state.showDropDown};
    case types.OPEN_NAV:
      return {...state, openNavMenu: !state.openNavMenu};
    case types.SHOW_LEND_ICON:
      return {...state, showLendI: !state.showLendI};
    case types.NAV_ITEM_SELECTED:
      return {...state, menuItemSelected: action.payload};
    case types.BOOK_SELECTED:
      return {...state, bookSelected: action.payload};
    case types.SELECT_LIMIT_DATE:
      return {...state, limitDate: action.payload};
    case types.REQUEST_BOOKS:
      return{
        ...state,
        isLoading: true,
        errorBooks: '',
      }
    case types.SUCCESS_BOOKS:
      return {
        ...state,
        isLoading: false,
        errorBooks: '',
        books: action.payload.books,
        pagination:action.payload.pagination
      }
    case types.SUCCESS_LEND_BOOK:
      return {
        ...state,
        isLoading: false,
        errorBooks: '',
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