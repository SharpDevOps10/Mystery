'use strict';
require('dotenv').config();
const express = require('express');
const sequelize = require('./database.js');
const models = require('./models/models.js');
const cors = require('cors');
const router = require('./routes/index');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middlewares/errorHandlingMiddleware');
const PORT = 5000;
const path = require('node:path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(5000, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};


start();

