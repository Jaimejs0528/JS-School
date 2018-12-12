/* eslint-disable import/no-unresolved */
import {
  HANDLE_ERROR,
  HANDLE_VALUE,
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  LOGOUT,
} from 'constants/loginTypes';

const initialState = {
  errorServer: null,
  isAuth: false,
  data: {
    email: { value: '', error: null },
    password: { value: '', error: null },
  },
}

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case HANDLE_VALUE:
      return {...state,
        data: {...state.data,
          [action.field]:{...state.data[action.field],
            value: action.payload}}}
    case HANDLE_ERROR:
      return {...state,
        data: {...state.data,
          [action.field]:{...state.data[action.field],
            error: action.payload}}}
    case REQUEST_LOGIN:
      return {...state, errorServer: null}
    case SUCCESS_LOGIN:
      return {...state, isAuth: (action.payload) ? true: false, errorServer: null, errorInputs: null}
    case FAIL_LOGIN:
      return {...state, errorServer: action.payload}
    case LOGOUT:
      return {...state, isAuth: false}
    default:
      return state
  }
}