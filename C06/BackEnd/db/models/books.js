import mongoose from 'mongoose';

import constants from '../../utils/constants';

const { Schema } = mongoose.Schema;

const bookInfoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numPages: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const bookLendSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  bookCode: {
    type: Number,
    required: true,
  },
});

const bookSchema = new Schema({
  bookinfo: {
    type: bookInfoSchema,
    required: true,
  },
  cities: {
    type: [String],
    required: true,
  },
  hasDigitalCopy: {
    type: Boolean,
    default: false,
  },
  availables: {
    type: [Number],
    required: true,
  },
  lends: {
    type: [bookLendSchema],
    default: [],
  },
});

bookSchema.methods.booksByCity = function booksByCity(city) {
  return this.model(constants.DB_BOOK_COLLECTION).find({ cities: this.cities }, city);
};

bookSchema.methods.booksByCityLimit = function booksByCityLimit(city, limit, skip) {
  return this.model(constants.DB_BOOK_COLLECTION).find({ cities: this.cities }, city)
    .limit(limit).skip(skip);
};

bookSchema.methods.bookLendByUser = function bookLendByUser(userEmail) {
  return this.model(constants.DB_BOOK_COLLECTION).find({ 'lends.userEmail': this.lends },
    userEmail);
};

bookSchema.methods.bookLendByUserLimit = function bookLendByUserLimit(userEmail, limit, skip) {
  return this.model(constants.DB_BOOK_COLLECTION).find({ 'lends.userEmail': this.lends },
    userEmail).limit(limit).skip(skip);
};

bookSchema.methods.digitalBooks = function digitalBooks() {
  return this.model(constants.DB_BOOK_COLLECTION)
    .find({ hasDigitalCopy: this.hasDigitalCopy }, true);
};

mongoose.model(constants.DB_BOOK_COLLECTION, bookSchema);
