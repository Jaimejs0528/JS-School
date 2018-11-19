const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { DB_USER_COLLECTION, SECRET } = require('../utils/constants');
const messageController = require('../utils/MessageGenerator');
const tool = require('../utils/Tool');

const User = mongoose.model(DB_USER_COLLECTION);
User.createIndexes();

exports.signUp = (req, res) => {
  messageController.bodyValidator(req.body, res);
  const newUser = new User(req.body);
  if (tool.validationFieldsUsers(req.body, res)) {
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

exports.signIn = (req, res) => {
  messageController.bodyValidator(req.body, res);
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
};

exports.isLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json(messageController
      .ErrorMessage(messageController.UNAUTHORIZED_ACCESS, DB_USER_COLLECTION));
  }
  return true;
};
