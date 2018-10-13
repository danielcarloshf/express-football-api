const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET all stadiums');
});

router.get('/:id', (req, res) => {
  res.send(`GET stadium ID #${req.params.id}`);
});

module.exports = router;