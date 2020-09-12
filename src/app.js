const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const fetchHistory = require('./lib/fetch-history');
const eventApi = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/slack/event', eventApi);
// the event adapter can only work if it comes before the body parser in the middleware stack
// it can use only raw reqeust
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋✨🌈🦄',
  });
});
app.use('/fetch-history', fetchHistory);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
