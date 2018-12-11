/* eslint-disable import/no-unresolved */
import { SERVER_URL, SIGN_IN_PATH } from 'services/urlConstants';
import{ REQUEST_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN, LOGOUT } from './actionTypes';

const requestData = () => {
  return {
    type: REQUEST_LOGIN
  }
}

const successfulRequest = (json) => {
  return {
    type: SUCCESS_LOGIN,
    payload: json
  }
}

const failedRequest = (error) => {
  return {
    type: FAIL_LOGIN,
    payload: error
  }
}

const logOut = () => {
  return {
    type: LOGOUT,
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