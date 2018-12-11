import * as Types from '../actions/loginTypes';

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
    case Types.HANDLE_VALUE:
      return {...state,
        data: {...state.data,
          [action.field]:{...state.data[action.field],
            value: action.payload}}}
    case Types.HANDLE_ERROR:
      return {...state,
        data: {...state.data,
          [action.field]:{...state.data[action.field],
            error: action.payload}}}
    case Types.REQUEST_LOGIN:
      return {...state, errorServer: null}
    case Types.SUCCESS_LOGIN:
      return {...state, isAuth: (action.payload) ? true: false, errorServer: null, errorInputs: null}
    case Types.FAIL_LOGIN:
      return {...state, errorServer: action.payload}
    case Types.LOGOUT:
      return {...state, isAuth: false}
    default:
      return state
  }
}