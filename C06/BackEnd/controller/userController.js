// Imports npm
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Local imports
const { DB_USER_COLLECTION, SECRET } = require('../utils/constants');
const messageController = require('../utils/messageGenerator');
const tool = require('../utils/tool');

// create model user collection
const User = mongoose.model(DB_USER_COLLECTION);
User.createIndexes();

// All Validations over User's fields.
const validationFieldsSignIn = (body, res) => {
  if (!tool.validatePassword(body.password, res)) return false;
  if (!tool.checkEmailFormat(body.email, res)) return false;
  return true;
};

// All Validations over User's fields.
const validationFieldsUsers = (body, res) => {
  if (!tool.validateTextField(body.name, res)) return false;
  if (!tool.validatePassword(body.password, res)) return false;
  if (!tool.checkEmailFormat(body.email, res)) return false;
  return true;
};

// SignUp function that register a new user into db
exports.signUp = (req, res) => {
  if (messageController.bodyValidator(req.body, res) && validationFieldsUsers(req.body, res)) {
    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
      const userLocal = user;
      if (err) {
        return res.status(400).send(messageController.ErrorMessage(err, DB_USER_COLLECTION));
      }
      userLocal.password = '';
      return res.status(201).json(user);
    });
  }
};


// signIn a user and generate jwt token.
exports.signIn = (req, res) => {
  if (messageController.bodyValidator(req.body, res)
  && validationFieldsSignIn(req.body, res)) {
    User.findOne({
      email: req.body.email,
    }, (err, user) => {
      if (err) {
        throw err;
      }
      if (!user) {
        return res.status(400).json(messageController
          .ErrorMessage(messageController.NOT_FOUND, DB_USER_COLLECTION));
      } if (!user.comparePassword(req.body.password)) {
        return res.status(400).json(messageController
          .ErrorMessage(messageController.INVALID_CREDENTIALS, DB_USER_COLLECTION));
      }
      return res.json({
        // eslint-disable-next-line no-underscore-dangle
        token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id },
          SECRET),
      });
    });
  }
};

// Validates if a user logged
exports.isLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json(messageController
      .ErrorMessage(messageController.UNAUTHORIZED_ACCESS, DB_USER_COLLECTION));
  }
  return true;
};
