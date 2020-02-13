const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const db = require('./db');
const middlewares = require('./middlewares');
const habit = require('./api/habits');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin : '*'
}));
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/habits/',habit);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
