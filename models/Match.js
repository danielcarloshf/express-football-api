/**
 * File: ./models/Match.js
 * Author: Daniel Hovadick
 * 
 * Defines a Match basic information.
 */
import PropTypes from 'prop-types';

const Match = (id, tournament, round, stadium, home, visitor, h_score, v_score) => ({
  id         : id,
  tournament : tournament,
  round      : round,
  stadium    : stadium,
  home       : home,
  visitor    : visitor,
  h_score    : h_score,
  v_score    : v_score
});

Match.propTypes = {
  id         : PropTypes.number.isRequired,
  tournament : PropTypes.number.isRequired,
  round      : PropTypes.number.isRequired,
  stadium    : PropTypes.number.isRequired,
  home       : PropTypes.number.isRequired,
  visitor    : PropTypes.number.isRequired,
  h_score    : PropTypes.number,
  v_score    : PropTypes.number
};

module.exports = Match;