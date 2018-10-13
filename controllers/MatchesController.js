const express = require('express');
const router = express.Router();

//const Match = require('../models/Match');

router.get('/', (req, res) => {
  res.send('GET all matches');
});

router.get('/:id', (req, res) => {
  res.send(`GET match ID #${req.params.id}`);
});

module.exports = router;