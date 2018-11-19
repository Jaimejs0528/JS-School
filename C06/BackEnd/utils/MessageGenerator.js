const { DB_USER_COLLECTION, DB_BOOK_COLLECTION } = require('./constants');
const tool = require('./Tool');

// OWN ERROR CODES
const INVALID_PASSWORD = 11;
const ALREADY_EXIST = 22;
const INVALID_EMAIL = 33;
const NOT_FOUND = 44;
const NOT_AVAILABLE = 55;
const INVALID_CREDENTIALS = 66;
const U_ALREADY_LOAN = 77;
const INVALID_BODY = 88;
const UNAUTHORIZED_ACCESS = 99;

// EXPORTS ERRORS
exports.NOT_FOUND = NOT_FOUND;
exports.INVALID_CREDENTIALS_EXT = INVALID_CREDENTIALS;
exports.INVALID_BODY = INVALID_BODY;
exports.INVALID_EMAIL = INVALID_EMAIL;
exports.NOT_AVAILABLE = NOT_AVAILABLE;
exports.INVALID_PASSWORD = INVALID_PASSWORD;
exports.U_ALREADY_LOAN = U_ALREADY_LOAN;
exports.COMMON = 'common';
exports.UNAUTHORIZED_ACCESS = UNAUTHORIZED_ACCESS;

// MONGO ERROR CODES
const EXIST = 11000;

// ERROR MESSAGES
const ERROR_MESSAGES = {
  [DB_USER_COLLECTION]: {
    [EXIST]: {
      code: ALREADY_EXIST,
      message: 'User Account already registered',
    },
    [NOT_FOUND]: {
      code: NOT_FOUND,
      message: 'User account non-existent',
    },
    [INVALID_CREDENTIALS]: {
      code: INVALID_CREDENTIALS,
      message: 'Email or password invalids',
    },
    [INVALID_PASSWORD]: {
      code: INVALID_PASSWORD,
      message: 'Password format invalid',
    },
    [INVALID_EMAIL]: {
      code: INVALID_EMAIL,
      message: 'Email format invalid',
    },
    [U_ALREADY_LOAN]: {
      code: U_ALREADY_LOAN,
      message: 'You already have loan this book',
    },
    [UNAUTHORIZED_ACCESS]: {
      code: UNAUTHORIZED_ACCESS,
      message: 'Access Unauthorized',
    },
  },
  [DB_BOOK_COLLECTION]: {
    [EXIST]: {
      code: ALREADY_EXIST,
      message: 'Book already register',
    },
    [NOT_FOUND]: {
      code: NOT_FOUND,
      message: 'Book(s) non-existent',
    },
    [NOT_AVAILABLE]: {
      code: NOT_AVAILABLE,
      message: 'Book non-available',
    },
  },
  common: {
    [INVALID_BODY]: {
      code: INVALID_BODY,
      message: 'Invalid Request',
    },
  },
};

// return error object that shows the error code and message.
exports.ErrorMessage = function ErrorMessage(error, controllerTransmitter) {
  console.log(error, controllerTransmitter);
  if (error && error.code) {
    return ERROR_MESSAGES[controllerTransmitter][error.code];
  }
  return ERROR_MESSAGES[controllerTransmitter][error];
};

// If body is empty return a error
exports.bodyValidator = function bodyValidator(body, res) {
  if (!body || tool.isEmpty(body)) {
    res.status(400).json(ERROR_MESSAGES.common[INVALID_BODY]);
  }
};
