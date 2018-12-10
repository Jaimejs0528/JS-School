export const IS_EMPTY_ERROR = "This field can't be empty";
export const INVALID_EMAIL_FORMAT = 'Invalid email format';
export const MAX_LENGTH = 'Max length exceeded';

// has the regEx to validate email and password fields(Login).
export const regEx = Object.freeze({
  limitOvercame: /.{40,}/,
  invalidEmail: /^[a-z].*@\w{3,15}\.[a-z0-9.]{1,10}\w$/i
});

// Validate fields regex
export const validateReGex = (reGEx, value) => {
  return reGEx.test(value);
}

// Decode the payload from jst token
const decodeToken = (token) => {
  if(token){
    const payload = token.split('.')[1];
    const decode = JSON.parse(decodeURIComponent(escape(atob(payload))));
    return decode;
  }
  return null;
}

// Validates if exist an user sign in.
export const Auth = () => {
  const token  = localStorage.getItem("token");
  const tokenDecoded = decodeToken(token);
  return (tokenDecoded);
}

export default this;