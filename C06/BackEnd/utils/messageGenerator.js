
// Local imports
const { DB_USER_COLLECTION, DB_BOOK_COLLECTION, MAX_DAYS_LEND } = require('./constants');
const tool = require('./tool');

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
const INVALID_FIELD = 111;
const INVALID_CITIES = 122;
const WITHOUT_CITIES = 133;
const INVALID_DATE = 144;
const INVALID_LIMIT_DATE = 155;
const OLD_DATE = 166;
const OVERCAME_LIMIT_DATE = 177;

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
exports.INVALID_FIELD = INVALID_FIELD;
exports.INVALID_CITIES = INVALID_CITIES;
exports.WITHOUT_CITIES = WITHOUT_CITIES;
exports.INVALID_DATE = INVALID_DATE;
exports.OLD_DATE = OLD_DATE;
exports.INVALID_LIMIT_DATE = INVALID_LIMIT_DATE;
exports.OVERCAME_LIMIT_DATE = OVERCAME_LIMIT_DATE;

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
    [INVALID_CITIES]: {
      code: INVALID_CITIES,
      message: 'Some city is not allowed',
    },
    [WITHOUT_CITIES]: {
      code: WITHOUT_CITIES,
      message: 'Add a city',
    },
    [INVALID_DATE]: {
      code: INVALID_DATE,
      message: 'Invalid Date',
    },
    [OLD_DATE]: {
      code: OLD_DATE,
      message: 'Date before today',
    },
    [INVALID_LIMIT_DATE]: {
      code: INVALID_LIMIT_DATE,
      message: 'limit date is minor or equal to lend date',
    },
    [OVERCAME_LIMIT_DATE]: {
      code: OVERCAME_LIMIT_DATE,
      message: `Date Overcome the limit (max ${MAX_DAYS_LEND} days)`,
    },
  },
  common: {
    [INVALID_BODY]: {
      code: INVALID_BODY,
      message: 'Invalid Request',
    },
  },
};

// Return error object that shows the error code and message.
exports.ErrorMessage = function ErrorMessage(error, controllerTransmitter) {
  if (error && error.code) {
    return ERROR_MESSAGES[controllerTransmitter][error.code];
  }
  if (error && error.message) {
    return { code: INVALID_FIELD, message: error.message };
  }
  return ERROR_MESSAGES[controllerTransmitter][error];
};

// If body is empty return a error
exports.bodyValidator = function bodyValidator(body, res) {
  if (!body || tool.isEmpty(body)) {
    res.status(400).json(ERROR_MESSAGES.common[INVALID_BODY]);
    return false;
  }
  return true;
};
