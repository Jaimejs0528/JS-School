const userHandler = require('../controller/userController');

exports.userRoutes = function userRoutes(app) {
  app.route('/auth/register')
    .post(userHandler.signUp);// Register a new user

  app.route('/auth/sign_in')
    .post(userHandler.signIn); // loggin a user
};
