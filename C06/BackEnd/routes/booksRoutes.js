const bookController = require('../controller/bookController');
const userController = require('../controller/userController');

exports.bookRoutes = function bookRoutes(app) {
  app.get('/bookshelf/books', bookController.findAllBooks);
  app.get('/bookshelf/books/digitals', bookController.getDigitals);
  app.get('/bookshelf/books/:isbn', bookController.findByISBN);
  app.get('/bookshelf/books/cities/:city', bookController.findByCity);
  app.post('/bookshelf/books', userController.isLogin, bookController.addOneBook);
  app.patch('/bookshelf/books/lends', userController.isLogin, bookController.lendABook);
  app.post('/bookshelf/books/lends', userController.isLogin, bookController.findByUserLoans);
};
