const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const middlewares = require('./middlewares');

const api = require('./api');
const habit = require('./habit');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1',api);

app.use('/habit/',habit);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
