/**
 * File: ./models/Team.js
 * Author: Daniel Hovadick
 * 
 * Defines a Team basic information.
 */
import PropTypes from 'prop-types';

const Team = ({id, name, short}) => ({
  id    : id,
  name  : name,
  short : short
});

Team.propTypes = {
  id   : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  short : PropTypes.number.isRequired
};

module.exports = Team;