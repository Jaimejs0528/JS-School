const userHandler = require('../controller/userController');

exports.userRoutes = function userRoutes(app) {
  app.route('/auth/register')
    .post(userHandler.signUp);

  app.route('/auth/sign_in')
    .post(userHandler.signIn);
};
