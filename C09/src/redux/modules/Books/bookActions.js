/* eslint-disable import/no-unresolved */
import { MD_VIEW } from 'utils/constants';
import { LOANS_ENDPOINT } from 'constants/urlConstants';
import {
  NAV_ITEM_SELECTED,
  OPEN_NAV,
  CHANGE_LOGO_ICON,
  BOOK_SELECTED,
  SHOW_DROPDOWN,
  SHOW_SUMMARY,
  FAIL_BOOKS,
  SUCCESS_BOOKS,
  REQUEST_BOOKS
} from 'constants/bookTypes';
import BookServices from 'services/bookServices';

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

const requestData = () => {
  return {
    type: REQUEST_BOOKS
  }
}

const successfulRequest = (json) => {
  return {
    type: SUCCESS_BOOKS,
    payload: json
  }
}

const failedRequest = (error) => {
  return {
    type: FAIL_BOOKS,
    payload: error
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

// Open navigation menu using space key
export const openMenuKeyBoard = (e) => {
  return dispatch => {
    if(e.which === 32 || e.keyCode === 32) dispatch(openNav());
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

// Validates when screen has changed
export const screenHasChanged = () => {
  return dispatch => {
    // Hide all overlay summaries open
  $('.overlay-summary').removeClass('show-summary').removeClass('change-sense');
  // Change Icon when screen resize
  dispatch(changeLogo(window.innerWidth));
  }
}

const selectService = (endpoint,type, data) => {
  switch(type){
    case 'home':
      return BookServices.getAll(endpoint);
    case 'city':
      return BookServices.getBooksByCity(endpoint, data);
    case 'digital':
      return BookServices.getDigitalBooks(endpoint);
    case 'get-loans':
      return BookServices.getLoansByUser(endpoint);
    case 'loan-one':
      return BookServices.lendABook(endpoint, data);
    default:
      return null;
  }
}

export const lendABook = ( isbn,  date) => {
  return dispatch =>{
    const bookToLend = {
    isbn,
    lendDate: new Date(),
    limitDate: date,
  }

  dispatch(consumeService(LOANS_ENDPOINT, 'loan-one', bookToLend));
  }
}

export const consumeService = ({endpoint, type ,data = {}}) => {
  return async (dispatch) => {
    try {
      dispatch(requestData());
      
      const result = await selectService(endpoint,type, data);
      const jsonData = await result.json();
      if(jsonData.message) {
        dispatch(failedRequest(jsonData.message));
      } else {
        dispatch(successfulRequest(jsonData));
      }
    } catch(e){
      dispatch(failedRequest(e));
    }
  }
}