// Imports Npm
const fetch = require('node-fetch');
const mongoose = require('mongoose');

const { DB_BOOK_COLLECTION, DB_FULL_PATH } = require('./constants');
require('../db/models/books');

// Decides if has digital copy or not
const shouldHasDigitalCopy = () => {
  const randomValue = Math.floor(Math.random() * 100);
  return randomValue >= 40;
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
  const amount = Math.floor((Math.random() * 10) + 3);
  for (let i = 2; i < amount; i += 1) {
    copies.push(Math.floor((Math.random() * 1000) + 100));
  }
  return copies;
};

// Add new Book from API GOOGLE with a specific ISBN
const addBookISBN = async (isbn, cities, copies) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  const resBook = await fetch(url);
  if (resBook.status === 403) return 'Google book service abuse';
  const jsonBook = await resBook.json();
  if (!jsonBook.items[0]) return 'Book not found';
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
    hasDigitalCopy: shouldHasDigitalCopy(),
  };
  mongoose.Promise = global.Promise;
  // Avoiding deprecation
  mongoose.set('useCreateIndex', true);
  const con = await mongoose.createConnection(DB_FULL_PATH, { useNewUrlParser: true })
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
  const Book = con.model(DB_BOOK_COLLECTION);
  Book.createIndexes();
  const newBookR = new Book(newBook);
  const saved = await newBookR.save().catch(err => err);
  con.close();
  return saved;
};

// Create a base of books.
const baseBooks = async () => {
  const arrayBooks = [9781451648546, 9781501175466, 9780547928227,
    9780618212903, 9780547928203, 9780345325815, 9780547154114,
    9780812974010, 9781476770390, 9781501173219, 9780804172448,
    9780425274866, 9780060883287, 9780785814535, 9781454921356,
    9780802123701, 9780451208637, 9780451531391, 9780142437544,
    9780674504868, 9780545790352, 9780545139700, 9780439139601,
    9780439064866, 9780439136365, 9781567925968, 9780345360502,
    9781119049104, 9780123742605, 9780131103627, 9780060652937,
    9780321928429, 9780132350884, 9780321563842, 9781593276034,
    9781593275990, 9781491962299, 9780387310732, 9781617294433,
    9781784393908, 9781979493956, 9781492044635, 9780140268867];
  console.log('Please wait....');
  const promises = arrayBooks
    .map(isbnBook => new Promise(async resolve => resolve(await addBookISBN(isbnBook,
      selectCities(), generateCopiesCode()).catch(err => err))));
  const allBooks = await Promise.all(promises).catch(err => err);
  console.log(allBooks.map(element => element.errmsg || element));
};

baseBooks();
