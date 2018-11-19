const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bodyParserError = require('bodyparser-json-error');
const jwt = require('jsonwebtoken');

require('./db/models/user');
require('./db/models/books');
const constant = require('./utils/constants');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/booksRoutes');
const messageGenerator = require('./utils/MessageGenerator');
const tool = require('./utils/Tool');

const app = express();
const options = {
  key: fs.readFileSync(`${__dirname}/Key/bookshelf-key.pem`, 'utf8'),
  cert: fs.readFileSync(`${__dirname}/Key/bookshelf-cert.crt`, 'utf8'),
  passphrase: 'bookshelf-jobsity',
};

mongoose.Promise = global.Promise;
// Allows use FindOneAndUpdate, this is doubt to a bug
mongoose.set('useFindAndModify', false);
// Avoiding deprecation
mongoose.set('useCreateIndex', true);
mongoose.connect(constant.DB_FULL_PATH, { useNewUrlParser: true })
  // eslint-disable-next-line no-console
  .catch(error => console.log(error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParserError.beautify({
  status: 400,
  res: messageGenerator.ErrorMessage(messageGenerator.INVALID_BODY, messageGenerator.COMMON),
}));

app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, constant.SECRET, (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

userRoutes.userRoutes(app);
bookRoutes.bookRoutes(app);

https.createServer(options, app).listen(constant.PORT_HTTPS, (req, res) => {
  console.log(`Using port ${constant.PORT_HTTPS}`);
});

http.createServer(app).listen(constant.PORT, (req, res) => {
  console.log(`Using port ${constant.PORT}`);
});
// app.listen(constant.PORT);
// tool.baseBooks();
