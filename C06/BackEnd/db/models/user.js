// Imports npm
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Locals
const { DB_USER_COLLECTION } = require('../../utils/constants');

const { Schema } = mongoose;

// User Schema document
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
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// Compare password with password's user.
userSchema.methods.comparePassword = function comparePassword(pass) {
  return bcrypt.compareSync(pass, this.password);
};

mongoose.model(DB_USER_COLLECTION, userSchema);
