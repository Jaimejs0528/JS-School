import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { DESTRUCTION } from 'dns';

const { Schema } = mongoose.Schema;

const userSchema = new Schema ({
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

mongoose.model('user', userSchema);
