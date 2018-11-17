const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { DB_USER_COLLECTION } = require('../utils/constants');
const messageController = require('../utils/MessageGenerator');

const User = mongoose.model(DB_USER_COLLECTION);

exports.signUp = (req, res) => {
  const newUser = new User(req.body);
  newUser.crypted_pass = bcrypt.hashSync(req.body.crypted_pass, 10);
  newUser.save((err, user) => {
    const userLocal = user;
    if (err) {
      return res.status(400).send(messageController.ErrorMessage(err.code, DB_USER_COLLECTION));
    }
    userLocal.crypted_pass = '';
    return res.json(user);
  });

  exports.signIn = (req, res) => {
    User.findOne({
      email: req.body.email,
    },function(err, user) {
      
    })
  
  };
};
