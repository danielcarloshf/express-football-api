const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET all tournaments');
});

router.get('/:id', (req, res) => {
  res.send(`GET tournament ID #${req.params.id}`);
});

module.exports = router;