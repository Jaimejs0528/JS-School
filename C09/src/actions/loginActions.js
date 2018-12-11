/* eslint-disable import/no-unresolved */
import UserServices from 'services/userServices';
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
  return async (dispatch) => {
    try {
      dispatch(requestData());
      const result = await UserServices.signIn(data);
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