// Imports Npm
const fetch = require('node-fetch');

// Local
const messageGenerator = require('./messageGenerator');
const { DB_BOOK_COLLECTION, PAGE_SIZE, MAX_DAYS_LEND } = require('./constants');

// Validates if the object is empty
const isEmpty = function isEmpty(obj) {
// eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) { return false; }
  }
  return true;
};

// returns all books with a specific a query
const findQuery = (res, query, model, limit = PAGE_SIZE, skip = 0) => {
  const processFind = async () => {
    const books = await model.find(query).limit(limit).skip(skip);
    return books;
  };
  processFind().then((response) => {
    res.status(200);
    if (response.length !== 0) {
      res.send(response);
    } else {
      const message = messageGenerator.ErrorMessage(messageGenerator.NOT_FOUND, DB_BOOK_COLLECTION);
      res.send(message);
    }
  }).catch((err) => {
    res.status(400).send(messageGenerator
      .ErrorMessage(err, DB_BOOK_COLLECTION));
  });
};

// Returns only one book with a specifict query
const findOneQuery = (res, query, model) => {
  const processFind = async () => {
    const books = await model.findOne(query);
    return books;
  };
  processFind().then((response) => {
    res.status(200);
    if (response) {
      res.send(response);
    } else {
      const message = messageGenerator.ErrorMessage(messageGenerator.NOT_FOUND, DB_BOOK_COLLECTION);
      res.json(message);
    }
  }).catch((err) => {
    res.status(400).send(messageGenerator
      .ErrorMessage(err, DB_BOOK_COLLECTION));
  });
};

// Validate is it is a VALID DATE
const dateValidator = (dateInput, res, message, isActual = true) => {
  const date = new Date(dateInput);
  if (date) {
    if (isActual) {
      const temporal = new Date();
      const today = new Date(temporal.getFullYear(),
        temporal.getMonth(), temporal.getDate());
      if (date.getTime() > today.getTime()) {
        return true;
      }
      const oldDate = messageGenerator
        .ErrorMessage(messageGenerator.OLD_DATE, DB_BOOK_COLLECTION);
      res.send(oldDate);
      return false;
    }
    return true;
  }
  res.send(message);
  return false;
};
// Validates that the limitDate is major to lendDate
// and that limitDate not overcomes the MAX_DAYS_LEND
const validateDateLimit = (lend, limit, res) => {
  const lendDate = new Date(lend);
  const limitDate = new Date(limit);
  const diff = limitDate.getTime() - lendDate.getTime();
  const days = diff / (24 * 60 * 60 * 1000); // convert milliseconds to days
  if (diff <= 0 || days === 0) {
    res.send(messageGenerator
      .ErrorMessage(messageGenerator.INVALID_LIMIT_DATE, DB_BOOK_COLLECTION));
    return false;
  }
  if (days > MAX_DAYS_LEND) {
    res.send(messageGenerator
      .ErrorMessage(messageGenerator.OVERCAME_LIMIT_DATE, DB_BOOK_COLLECTION));
    return false;
  }
  return true;
};

// Validates that receives the arguments correspondly
const validateFieldUsingRegexp = (input, regExp, res, message) => {
  if (input) {
    // password with between 6  to 16 with aleast one digit, lowercase, uppercase and special char.
    if (!regExp.test(input)) {
      res.status(400).send(message);
      return false;
    }
  } else {
    res.status(400).send(messageGenerator
      .ErrorMessage(messageGenerator.INVALID_BODY, messageGenerator.COMMON));
    return false;
  }
  return true;
};

// Validates that input has a length limit
const limitInputLength = (input, limit, res, message) => {
  const regExp = new RegExp(`.{1,${limit}}`, 'g');
  return validateFieldUsingRegexp(input, regExp, res, message);
};

// validates if the password has the correct format
const validatePassword = (password, res, message) => {
  const regExp = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/g;
  return validateFieldUsingRegexp(password, regExp, res, message);
};

// validates if the email has the correct format
const checkEmailFormat = (email, res, message) => {
  const format = /^[a-z].*@\w{3,15}\.[a-z0-9.]{1,10}\w$/ig;
  return validateFieldUsingRegexp(email, format, res, message);
};

// Validates if the text is just a-zA-Z with spaces
const validateTextField = (text, res, message) => {
  const format = /^[a-z\s]{2,30}$/ig;
  return validateFieldUsingRegexp(text, format, res, message);
};

// Add new Book from API GOOGLE with a specific ISBN
const addBookISBN = async (isbn, cities, copies) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  const resBook = await fetch(url);
  const jsonBook = await resBook.json();
  const information = jsonBook.items[0].volumeInfo;
  const {
    title,
    authors,
    averageRating: rating,
    description,
    imageLinks,
    pageCount: numPages,
    publishedDate,
  } = information;
  const year = publishedDate.split('-')[0];
  const author = authors[0];
  const image = imageLinks.thumbnail;
  const newBookInfo = {
    isbn,
    title,
    author,
    year,
    description,
    numPages,
    rating,
    image,
  };
  const newBook = {
    internalCode: Math.floor((Math.random() * 1000) + 100),
    bookinfo: newBookInfo,
    cities,
    copies,
    hasDigitalCopy: true,
  };
  const urlLocal = 'http://localhost:3202/bookshelf/books';
  const response = await fetch(urlLocal, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaW1lQGhvdG1haWwuY29tIiwiX2lkIjoiNWJmMTc0ZDQxNjUwOWI3YWI0ODdmY2Y1IiwiaWF0IjoxNTQyNTcyMzEyfQ.DjiIV0b73HNlWcL41Kqx67dpn92OOkLMkCvtQ20tews',
    },
    body: JSON.stringify(newBook),
  });
  return response;
};

// Select randomly the cities to add to book.
const selectCities = () => {
  const cities = ['medellin', 'quito', 'cartagena'];
  let selected = cities.filter(city => (Math.floor((Math.random() * 100)) >= 65 && city));
  selected = (selected.length === 0) ? [cities[Math.floor((Math.random() * 3))]] : selected;
  return selected;
};

// Generate randomly codes for book's copies.
const generateCopiesCode = () => {
  const copies = [];
  const amount = Math.floor((Math.random() * 10));
  for (let i = 0; i < amount; i += 1) {
    copies.push(Math.floor((Math.random() * 1000) + 100));
  }
  return copies;
};

// EXPORTS
exports.isEmpty = isEmpty;
exports.checkEmailFormat = checkEmailFormat;
exports.validatePassword = validatePassword;
exports.validateTextField = validateTextField;
exports.limitInputLength = limitInputLength;
exports.findOneQuery = findOneQuery;
exports.findQuery = findQuery;
exports.dateValidator = dateValidator;
exports.validateDateLimit = validateDateLimit;
