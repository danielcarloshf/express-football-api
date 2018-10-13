const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET all teams');
});

router.get('/:id', (req, res) => {
  res.send(`GET team ID #${req.params.id}`);
});

module.exports = router;