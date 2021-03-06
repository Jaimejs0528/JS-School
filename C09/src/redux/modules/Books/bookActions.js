/* eslint-disable import/no-unresolved */
import { MD_VIEW } from 'utils/constants';
import {
  NAV_ITEM_SELECTED,
  OPEN_NAV,
  CHANGE_LOGO_ICON,
  BOOK_SELECTED,
  SHOW_DROPDOWN,
  SHOW_LEND_ICON,
  SELECT_LIMIT_DATE,
  FAIL_BOOKS,
  SUCCESS_BOOKS,
  REQUEST_BOOKS,
  SUCCESS_LEND_BOOK
} from 'constants/bookTypes';
import {
  BOOKS_BASE,
  DIGITAL_ENDPOINT,
  LOANS_ENDPOINT,
  CITIES_ENDPOINT
} from 'constants/urlConstants';
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

const showIcon = () =>{
  return {
    type: SHOW_LEND_ICON,
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

const successfulLendRequest = () => {
  return {
    type: SUCCESS_LEND_BOOK,
  }
}

const selectLimDate = (date) => {
  return {
    type: SELECT_LIMIT_DATE,
    payload: date
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

// Toggle between show or not lend icon
export const showLendIcon = () => {
  return dispatch => {
    dispatch(showIcon());
  }
}

// open nav menu for smalls views
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

// close the open summary
export const closeSummary = () => {
  return dispatch => {
    dispatch(changeBookSelected(-1));
  }
}

// get the limit date to lend the book
export const selectLimitDate = (date) => {
  return dispatch => {
    dispatch(selectLimDate(date));
  }
}

// Function that calls lend book service
export const lendABook = (isbn, date) => {
  return dispatch => {
    if (date) {
      const bookToLend = {
        isbn,
        lendDate: new Date(),
        limitDate: date,
      }
      dispatch(consumeService(LOANS_ENDPOINT, 'loan-one', bookToLend));
      dispatch(closeSummary());
      dispatch(showIcon());
    } else{
      alert('Select a date');
    }
  }

}

// Validates when screen has changed
export const screenHasChanged = () => {
  return dispatch => {
  // Change Icon when screen resize
  dispatch(changeLogo(window.innerWidth));
  // close open summary
  dispatch(closeSummary());
  }
}

// Consume the services from server
export const fetchBooksData = (query, location) => {
  return dispatch =>{
    const queryD = query.url.split('/')[2];
    if(queryD === 'cities'){
      const city = query.url.split('/')[3];
      dispatch(consumeService(`${CITIES_ENDPOINT}/${city.toLowerCase()}/${location.search}`,'city'));
      return;
    }
    if (queryD === 'lends') { 
      dispatch(consumeService(`${LOANS_ENDPOINT}/${location.search}`,'get-loans'));
      return;
    } 
    if (queryD === 'digitals') { 
      dispatch(consumeService(`${DIGITAL_ENDPOINT}/${location.search}`,'digital'));
      return;
    }
    dispatch(consumeService(`${BOOKS_BASE}${location.search}`,'home'));
    return;  
  }  
}

// Select which service call
const selectService = (endpoint,type, data) => {
  switch(type){
    case 'home':
      return BookServices.getAllBooks(endpoint);
    case 'city':
      return BookServices.getBooksByCity(endpoint);
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

// call a service from backend
export const consumeService = (endpoint, type ,data = null) => {
  return async (dispatch) => {
    try {
      dispatch(requestData());
      
      const result = await selectService(endpoint, type, data);
      const jsonData = await result.json();
      if(jsonData.message) {
        dispatch(failedRequest(jsonData.message));
      } else {
        if(type !== 'loan-one'){
          dispatch(successfulRequest(jsonData));
        } else {
          dispatch(successfulLendRequest());
        }
      }
    } catch(e){
      dispatch(failedRequest(e.toString()));
    }
  }
}