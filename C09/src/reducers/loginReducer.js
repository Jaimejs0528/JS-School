import * as Types from '../actions/loginTypes';

const initialState = {
  errorServer: null,
  isAuth: false,
  data: {
    email: { value: '', error: null },
    password: { value: '', error: null },
  },
  errorInputs: null,
}

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.REQUEST_LOGIN:
      return {...state, errorServer: null, errorInputs: null}
    case Types.SUCCESS_LOGIN:
      return {...state, isAuth: action.payload, errorServer: null, errorInputs: null}
    case Types.FAIL_LOGIN:
      return {...state, errorServer: action.payload}
    case Types.ADD_LOCAL_ERROR:
      return {...state, errorInputs: action.payload}
    case Types.LOGOUT:
      return {...state, isAuth: false}
    default:
      return state
  }
}