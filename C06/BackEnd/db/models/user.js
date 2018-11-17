// Imports npm
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Locals
const { DB_USER_COLLECTION } = require('../../utils/constants');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  crypted_pass: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = function comparePassword(pass) {
  return bcrypt.compareSync(pass, this.crypted_pass);
};

mongoose.model(DB_USER_COLLECTION, userSchema);
