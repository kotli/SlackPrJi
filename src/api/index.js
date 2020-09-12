const express = require('express');

const fetchHistory = require('../lib/fetch-history');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/fetch-history', fetchHistory);


module.exports = router;
