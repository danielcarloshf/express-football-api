const express = require('express');
const router = express.Router();

const matches = require('../controllers/MatchesController');
const stadiums = require('../controllers/StadiumsController');
const teams = require('../controllers/TeamsController');
const tournaments = require('../controllers/TournamentsController');

router.use('/matches', matches);
router.use('/stadiums', stadiums);
router.use('/teams', teams);
router.use('/tournaments', tournaments);

module.exports = router;