// Imports npm
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Local imports
const { DB_USER_COLLECTION, SECRET, TOKEN_EXPIRE_TIME } = require('../utils/constants');
const messageGenerator = require('../utils/messageGenerator');
const tool = require('../utils/tool');

// create model user collection
const User = mongoose.model(DB_USER_COLLECTION);
User.createIndexes();

// All Validations over User's fields.
const validationFieldsSignIn = (body, res) => {
  // MESSAGES
  const emailMesage = messageGenerator
    .ErrorMessage(messageGenerator.INVALID_EMAIL, DB_USER_COLLECTION);
  const invalidCredentials = messageGenerator
    .ErrorMessage(messageGenerator.INVALID_CREDENTIALS_EXT, DB_USER_COLLECTION);

  // VALIDATIONS
  if (!tool.checkEmailFormat(body.email, res, emailMesage)) return false;
  if (!tool.limitInputLength(body.password, 16, res, invalidCredentials)) return false;
  return true;
};

// All Validations over User's fields.
const validationFieldsUsers = (body, res) => {
  // MESSAGES
  const passwordMessage = messageGenerator
    .ErrorMessage(messageGenerator.INVALID_PASSWORD, DB_USER_COLLECTION);
  const emailMesage = messageGenerator
    .ErrorMessage(messageGenerator.INVALID_EMAIL, DB_USER_COLLECTION);
  const fieldMessage = messageGenerator
    .ErrorMessage(messageGenerator.INVALID_BODY, messageGenerator.COMMON);

  // VALIDATIONS
  if (!tool.validateTextField(body.name, res, fieldMessage)) return false;
  if (!tool.validatePassword(body.password, res, passwordMessage)) return false;
  if (!tool.checkEmailFormat(body.email, res, emailMesage)) return false;
  return true;
};

// SignUp function that register a new user into db
exports.signUp = (req, res) => {
  if (messageGenerator.bodyValidator(req.body, res) && validationFieldsUsers(req.body, res)) {
    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
      const userLocal = user;
      if (err) {
        return res.status(400).send(messageGenerator.ErrorMessage(err, DB_USER_COLLECTION));
      }
      userLocal.password = '';
      return res.status(201).json(user);
    });
  }
};


// signIn a user and generate jwt token.
exports.signIn = (req, res) => {
  if (messageGenerator.bodyValidator(req.body, res)
  && validationFieldsSignIn(req.body, res)) {
    User.findOne({
      email: req.body.email,
    }, (err, user) => {
      if (err) {
        throw err;
      }
      if (!user) {
        return res.status(400).json(messageGenerator
          .ErrorMessage(messageGenerator.NOT_FOUND, DB_USER_COLLECTION));
      } if (!user.comparePassword(req.body.password)) {
        return res.status(400).json(messageGenerator
          .ErrorMessage(messageGenerator.INVALID_CREDENTIALS_EXT, DB_USER_COLLECTION));
      }
      return res.json({
        // eslint-disable-next-line no-underscore-dangle
        token: jwt.sign({ email: user.email, fullName: user.fullName, icon: user.icon },
          SECRET, { expiresIn: TOKEN_EXPIRE_TIME }),
      });
    });
  }
};

// Validates if a user logged
exports.isLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json(messageGenerator
      .ErrorMessage(messageGenerator.UNAUTHORIZED_ACCESS, DB_USER_COLLECTION));
  }
  return true;
};
