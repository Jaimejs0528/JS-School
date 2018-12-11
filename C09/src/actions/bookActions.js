/* eslint-disable import/no-unresolved */
import { MD_VIEW } from 'utils/constants';
import {
  NAV_ITEM_SELECTED,
  OPEN_NAV,
  CHANGE_LOGO_ICON,
  BOOK_SELECTED,
  SHOW_DROPDOWN,
  SHOW_SUMMARY
} from './actionTypes';

const changeSelectedNavItem = (item) =>{
  return {
    type: NAV_ITEM_SELECTED,
    payload: item
  }
}

const changeLogoIcon = (small) =>{
  return {
    type: CHANGE_LOGO_ICON,
    payload: small
  }
}

const openNav = () =>{
  return {
    type: OPEN_NAV,
  }
}

const showDropdown = () =>{
  return {
    type: SHOW_DROPDOWN,
  }
}

const showSummary = () =>{
  return {
    type: SHOW_SUMMARY,
  }
}

const changeBookSelected = (isbn) =>{
  return {
    type: BOOK_SELECTED,
    payload: isbn
  }
}

export const changeLogo = (screenX) => {
  return dispatch => {
    if (screenX < MD_VIEW) {
      dispatch(changeLogoIcon(true));
    } else {
      dispatch(changeLogoIcon(false));
    }
  }
}

export const openDropdown = () => {
  return dispatch => {
    dispatch(showDropdown());
  }
}

export const openSummary = () => {
  return dispatch => {
    dispatch(showSummary());
  }
}

export const openMenu = () => {
  return dispatch => {
    dispatch(openNav());
  }
}

export const changeSelectedOption = (event) => {
  return dispatch => {
    dispatch(changeSelectedNavItem(event.target.textContent));
  }
} 

export const changeSelectedBook = (isbn) => {
  return dispatch => {
    dispatch(changeBookSelected(isbn));
  }
} 