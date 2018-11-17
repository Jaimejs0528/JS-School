const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./db/models/user');
const constant = require('./utils/constants');
const routes = require('./routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(constant.DB_FULL_PATH, { useNewUrlParser: true })
  .catch(error => console.log(error));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.userRoutes(app);

app.listen(constant.PORT);
console.log(`Using port ${constant.PORT}`);
