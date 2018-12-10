/* eslint-disable import/no-unresolved */
import { validateReGex, INVALID_EMAIL_FORMAT, MAX_LENGTH, IS_EMPTY_ERROR, regEx } from 'utils/tools';
import { HANDLE_VALUE, HANDLE_ERROR } from './loginTypes';

const handleValue = (value, field) => ({
  type: HANDLE_VALUE,
  payload:value,
  field,
});

const handleError = (error, field) => ({
  type: HANDLE_ERROR,
  payload:error,
  field,
});

// Validates if the field doesn't accomplish some rule
const fieldHandler = (e = null) => {
  return dispatch => {
    const { name } = e.target;

    if(e && e.target.value){
      const value = e.target.value;
      const errorLengthExceed = (validateReGex(regEx.limitOvercame, value)) ? 
      MAX_LENGTH : null;

      dispatch(handleError(errorLengthExceed, name));
      if (name == 'email'){
        const errorEmail = (!validateReGex(regEx.invalidEmail,value)) ?
        INVALID_EMAIL_FORMAT : null;
        if(errorEmail) {
          dispatch(handleError(errorEmail, name));
        }
        else {
          dispatch(handleError( errorLengthExceed, name));
        }
      }

      if(errorLengthExceed) {
        dispatch(handleError(errorLengthExceed, name));
      }
      else {
        dispatch(handleValue(value, name));
      }
    } else {
      dispatch(handleError(IS_EMPTY_ERROR, name));
      dispatch(handleValue('', name));
    }
  }
}

  export default fieldHandler;