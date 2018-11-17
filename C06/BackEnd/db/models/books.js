import mongoose from 'mongoose';

import { DB_BOOK_COLLECTION } from '../../utils/constants';

const { Schema } = mongoose;

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
  return this.model(DB_BOOK_COLLECTION).find({ cities: this.cities }, city);
};

bookSchema.methods.booksByCityLimit = function booksByCityLimit(city, limit, skip) {
  return this.model(DB_BOOK_COLLECTION).find({ cities: this.cities }, city)
    .limit(limit).skip(skip);
};

bookSchema.methods.bookLendByUser = function bookLendByUser(userEmail) {
  return this.model(DB_BOOK_COLLECTION).find({ 'lends.userEmail': this.lends },
    userEmail);
};

bookSchema.methods.bookLendByUserLimit = function bookLendByUserLimit(userEmail, limit, skip) {
  return this.model(DB_BOOK_COLLECTION).find({ 'lends.userEmail': this.lends },
    userEmail).limit(limit).skip(skip);
};

bookSchema.methods.digitalBooks = function digitalBooks() {
  return this.model(DB_BOOK_COLLECTION)
    .find({ hasDigitalCopy: this.hasDigitalCopy }, true);
};

bookSchema.methods.digitalBooksLimit = function digitalBooksLimit(limit, skip) {
  return this.model(DB_BOOK_COLLECTION)
    .find({ hasDigitalCopy: this.hasDigitalCopy }, true)
    .limit(limit).skip(skip);
};

bookSchema.methods.sortByPopularity = function sortByPopularity(rating) {
  return this.model(DB_BOOK_COLLECTION).find()
    .sort({ 'infobook.rating': this.infobook.rating }, rating);
};

bookSchema.methods.sortByPopularityLimit = function sortByPopularityLimit(rating, limit, skip) {
  return this.model(DB_BOOK_COLLECTION).find()
    .sort({ 'infobook.rating': this.infobook.rating }, rating)
    .limit(limit)
    .skip(skip);
};

mongoose.model(DB_BOOK_COLLECTION, bookSchema);
