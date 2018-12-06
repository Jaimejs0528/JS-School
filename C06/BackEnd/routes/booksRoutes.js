const bookController = require('../controller/bookController');
const userController = require('../controller/userController');

exports.bookRoutes = function bookRoutes(app) {
  app.get('/bookshelf/books', userController.isLogin, bookController.findAllBooks); // Gets all books
  app.get('/bookshelf/books/digitals', userController.isLogin, bookController.getDigitals); // Gets books in digital
  app.patch('/bookshelf/books/digitals/lends', userController.isLogin, userController.isLogin, bookController.getDigitals); // Gets books in digital
  app.get('/bookshelf/books/:isbn', userController.isLogin, bookController.findByISBN); // Gets a book by isbn
  app.get('/bookshelf/books/cities/:city', userController.isLogin, bookController.findByCity); // Gets books by city
  app.post('/bookshelf/books', userController.isLogin,  bookController.addOneBook); // Add a new book
  app.patch('/bookshelf/books/lends', userController.isLogin, bookController.lendABook); // Lend a book
  app.post('/bookshelf/books/lends', userController.isLogin, bookController.findByUserLoans); // Gets books loans by specific user
};
