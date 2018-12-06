// Imports npm
const mongoose = require('mongoose');

// Local imports
const { DB_BOOK_COLLECTION, DB_USER_COLLECTION, CITIES } = require('../utils/constants');
const messageGenerator = require('../utils/messageGenerator');
const tool = require('../utils/tool');

// Create books model
const Book = mongoose.model(DB_BOOK_COLLECTION);
Book.createIndexes();

// Validates if a user can lend a book
const validateBooksLoans = (lends, copies, emailUser, lendDate, limitDate) => {
  const alreadyLoan = lends.filter(value => value.userEmail === emailUser);
  const arrayTemp = lends.map(item => item.bookCode);
  const availables = copies.filter(value => arrayTemp.indexOf(value) === -1);
  // console.log(availables, arrayTemp, alreadyLoan);
  if (alreadyLoan.length > 0) {
    return messageGenerator
      .ErrorMessage(messageGenerator.U_ALREADY_LOAN, DB_USER_COLLECTION);
  }
  if (availables.length === 0) {
    return messageGenerator
      .ErrorMessage(messageGenerator.NOT_AVAILABLE, DB_BOOK_COLLECTION);
  }
  return {
    userEmail: emailUser,
    bookCode: availables[0],
    lendDate,
    limitDate,
  };
};

// Validates dates for lend
const validateLendDates = (lendDate, limitDate, res) => {
  const invalidDateMessage = messageGenerator
    .ErrorMessage(messageGenerator.INVALID_DATE, DB_BOOK_COLLECTION);

  if (!tool.dateValidator(lendDate, res, invalidDateMessage)) return false;
  if (!tool.dateValidator(limitDate, res, invalidDateMessage)) return false;
  if (!tool.validateDateLimit(lendDate, limitDate, res)) return false;
  return true;
};

// Validates if exist an invalid city or array is empty
const citiesValidation = (cities, res) => {
  if (cities.length === 0) {
    res.status(400)
      .send(messageGenerator.ErrorMessage(messageGenerator.WITHOUT_CITIES, DB_BOOK_COLLECTION));
    return false;
  }
  const citiesLocal = (cities.length > CITIES.length) ? cities.slice(0, CITIES.length) : cities;
  const output = citiesLocal.filter(city => (CITIES
    .filter(compare => compare.test(city))).length > 0);
  if (output.length !== citiesLocal.length) {
    res.status(400)
      .send(messageGenerator.ErrorMessage(messageGenerator.INVALID_CITIES, DB_BOOK_COLLECTION));
    return false;
  }
  return true;
};

// Creates a  new book
exports.addOneBook = (req, res) => {
  const newBook = new Book(req.body);

  // Validates cities different to quito, medellin and cartagena
  if (messageGenerator.bodyValidator(req.body, res) && citiesValidation(newBook.cities, res)) {
    // Return a book added to db
    const processAdd = async () => {
      const existent = await newBook.findByISBN(req.body.bookinfo.isbn);
      if (existent) {
        const { copies: toLend } = existent;
        toLend.push(req.body.internalCode);
        // eslint-disable-next-line no-underscore-dangle
        const id = existent._id;
        const intCode = req.body.internalCode;

        // eslint-disable-next-line no-underscore-dangle
        const update = await Book.findOneAndUpdate({
          $and: [{ _id: id }, { copies: { $ne: intCode } }],
        }, { $set: { copies: toLend } }, { upsert: true, new: true });
        return update;
      }
      newBook.copies.push(req.body.internalCode);
      newBook.lends = [];
      const saved = await newBook.save()
        .catch((err) => {
          res.status(400)
            .send(messageGenerator.ErrorMessage(err, DB_BOOK_COLLECTION));
          return undefined;
        });
      return saved;
    };

    // Execute previous Async function
    processAdd(req).then(response => res.status(201).send(response)).catch((err => res.status(400)
      .send(messageGenerator.ErrorMessage(err, DB_BOOK_COLLECTION))));
  }
};

// Allow to User lend a book
exports.lendABook = (req, res) => {
  const { lendDate } = req.body;
  const { limitDate } = req.body;
  
  if (validateLendDates(lendDate, limitDate, res)) {
    const bookIsbn = req.body.isbn;
    const getBooks = async () => {
      const ret = await Promise.all([
        Book.findOne({ 'bookinfo.isbn': bookIsbn }, { _id: 0, lends: 1 }),
        Book.findOne({ 'bookinfo.isbn': bookIsbn }, { _id: 0, copies: 1 }),
      ]);
      if (ret[0] && ret[1]) {
        const emailUserLogged = req.user.email;
        const lendsArray = ret[0].lends;
        const copiesArray = ret[1].copies;
        const output = validateBooksLoans(lendsArray, copiesArray,
          emailUserLogged, lendDate, limitDate);
        if (Object.prototype.hasOwnProperty.call(output, 'code')) {
          res.status(200).send(output);
        } else {
          lendsArray.push(output);
          const update = await Book.findOneAndUpdate({ 'bookinfo.isbn': bookIsbn },
            { $set: { lends: lendsArray } }, { upsert: true, new: true });
          res.status(200).send(update);
        }
      } else {
        res.status(400).send(messageGenerator
          .ErrorMessage(messageGenerator.NOT_FOUND, DB_BOOK_COLLECTION));
      }
    };
    getBooks().catch(err => res.status(400)
      .send(messageGenerator.ErrorMessage(err, DB_BOOK_COLLECTION)));
  }
};

// returns all books
exports.findAllBooks = (req, res) => {
  const filter = req.query.search || '.{1,40}';
  const regex = new RegExp(filter, 'i');
  tool.findQuery(req, res, {
    $or: [{ 'bookinfo.title': regex }, { 'bookinfo.author': regex }],
  }, Book);
};

// returns a book by ISBN
exports.findByISBN = (req, res) => {
  const { isbn } = req.params;
  tool.findOneQuery(res, { 'bookinfo.isbn': isbn }, Book);
};

// returns all books with a digital copy
exports.getDigitals = (req, res) => {
  const filter = req.query.search || '.{1,40}';
  const regex = new RegExp(filter, 'i');
  tool.findQuery(req, res, {
    hasDigitalCopy: true,
    $or: [{ 'bookinfo.title': regex }, { 'bookinfo.author': regex }],
  }, Book);
};

// returns all book if a specific city
exports.findByCity = (req, res) => {
  const filter = req.query.search || '.{1,40}';
  const regex = new RegExp(filter, 'i');
  const { city } = req.params;
  tool.findQuery(req, res, {
    cities: city,
    $or: [{ 'bookinfo.title': regex }, { 'bookinfo.author': regex }],
  }, Book);
};

// return books loans for a specific user
exports.findByUserLoans = (req, res) => {
  const filter = req.query.search || '.{1,40}';
  const regex = new RegExp(filter, 'i');
  const emailUserLogged = req.user.email;
  tool.findQuery(req, res, {
    'lends.userEmail': emailUserLogged,
    $or: [{ 'bookinfo.title': regex }, { 'bookinfo.author': regex }],
  }, Book);
};
