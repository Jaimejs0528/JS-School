// Imports npm
const mongoose = require('mongoose');

// Locals
const { DB_BOOK_COLLECTION } = require('../../utils/constants');

const { Schema } = mongoose;

const bookInfoSchema = new Schema({
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  author: {
    type: String,
    required: true,
    lowercase: true,
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
    lowercase: true,
  },
  hasDigitalCopy: {
    type: Boolean,
    default: false,
  },
  copies: {
    type: [Number],
    default: [],
  },
  lends: {
    type: [bookLendSchema],
    default: [],
  },
});

bookSchema.methods.findByISBN = async function findByISBN(isbn) {
  return this.model(DB_BOOK_COLLECTION).findOne({ 'bookinfo.isbn': isbn });
};

bookSchema.methods.bookLendByUser = async function bookLendByUser(userEmail) {
  return this.model(DB_BOOK_COLLECTION).find({ 'lends.userEmail': userEmail });
};

bookSchema.methods.bookLendByUserLimit = async function
bookLendByUserLimit(userEmail, limit, skip) {
  return this.model(DB_BOOK_COLLECTION).find({ 'lends.userEmail': userEmail })
    .limit(limit).skip(skip);
};

bookSchema.methods.sortByPopularity = async function sortByPopularity(rating) {
  return this.model(DB_BOOK_COLLECTION).find()
    .sort({ 'infobook.rating': this.infobook.rating }, rating);
};

bookSchema.methods.sortByPopularityLimit = async function
sortByPopularityLimit(rating, limit, skip) {
  return this.model(DB_BOOK_COLLECTION).find()
    .sort({ 'infobook.rating': this.infobook.rating }, rating)
    .limit(limit)
    .skip(skip);
};

mongoose.model(DB_BOOK_COLLECTION, bookSchema);
