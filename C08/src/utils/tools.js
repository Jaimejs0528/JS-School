export const IS_EMPTY_ERROR = "This field can't be empty";
export const INVALID_EMAIL_FORMAT = 'Invalid email format';
export const MAX_LENGTH = 'Max length exceeded';

export const regEx = Object.freeze({
 limitOvercame: /.{40,}/,
 invalidEmail: /^[a-z].*@\w{3,15}\.[a-z0-9.]{1,10}\w$/i
});

export default this;