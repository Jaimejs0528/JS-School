/* eslint-disable import/no-unresolved */
import { SERVER_URL, SIGN_IN_PATH } from 'services/urlConstants';
import * as Types from './loginTypes';

const requestData = () => {
  return {
    type: Types.REQUEST_LOGIN
  }
}

const successfulRequest = (json) => {
  return {
    type: Types.SUCCESS_LOGIN,
    payload: json
  }
}

const failedRequest = (error) => {
  return {
    type: Types.FAIL_LOGIN,
    payload: error
  }
}

const logOut = () => {
  return {
    type: Types.LOGOUT,
  }
}

const addLocalError = (error) => {
  return {
    type: Types.LOGOUT,
    payload: error
  }
}

const signIn = (data) => {
  const request = {
    method: 'POST',
    headers:{'Content-Type': 'application/json',},
    body:JSON.stringify(data),
  }
  return async (dispatch) => {
    try {
      dispatch(requestData());
      const result = await fetch(`${SERVER_URL}${SIGN_IN_PATH}`, request);
      const jsonData = await result.json();
      if(jsonData.message) {
        dispatch(failedRequest(jsonData.message));
      } else {
        localStorage.setItem('token', jsonData.token);
        dispatch(successfulRequest(jsonData));
      }
    } catch(e){
      dispatch(failedRequest(e));
    }
  }
}

export const signOut = () => {
  return dispatch => {
    localStorage.clear();
    dispatch(logOut());
  }

}

export default signIn;