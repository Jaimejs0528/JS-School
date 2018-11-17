const { DB_USER_COLLECTION, DB_BOOK_COLLECTION } = require('./constants');

// OWN ERROR CODES
const ALREADY_EXIST = 22;

// ERROR MESSAGES
const ERROR_MESSAGES = {
  [DB_USER_COLLECTION]: {
    11000: {
      code: ALREADY_EXIST,
      message: 'User Account already registered',
    },
  },
  [DB_BOOK_COLLECTION]: {
    11000: {
      code: ALREADY_EXIST,
      message: 'Book already register',
    },
  },
};

exports.ErrorMessage = function ErrorMessage(errorCode, controllerEmisor) {
  return ERROR_MESSAGES[controllerEmisor][errorCode];
};
