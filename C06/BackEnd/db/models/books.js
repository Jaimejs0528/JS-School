// Imports npm
const mongoose = require('mongoose');

// Locals
const { DB_BOOK_COLLECTION } = require('../../utils/constants');

const { Schema } = mongoose;

// Schema for bookinfo document
const bookInfoSchema = new Schema({
  isbn: {
    type: Number,
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
    default: -1,
  },
  image: {
    type: String,
    required: true,
  },
});
// Schema for lends document
const bookLendSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  bookCode: {
    type: Number,
    required: true,
  },
  lendDate: {
    type: Date,
    required: true,
  },
  limitDate: {
    type: Date,
    required: true,
  },
});

// Schema for book document
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

// returns is exist a book
bookSchema.methods.findByISBN = async function findByISBN(isbn) {
  return this.model(DB_BOOK_COLLECTION).findOne({ 'bookinfo.isbn': isbn });
};

// sort by rating
bookSchema.methods.sortByPopularityLimit = async function
sortByPopularityLimit(rating, limit, skip) {
  return this.model(DB_BOOK_COLLECTION).find()
    .sort({ 'infobook.rating': this.infobook.rating }, rating)
    .limit(limit)
    .skip(skip);
};

mongoose.model(DB_BOOK_COLLECTION, bookSchema);
