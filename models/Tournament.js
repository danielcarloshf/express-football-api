/**
 * File: ./models/Tournament.js
 * Author: Daniel Hovadick
 * 
 * Defines a Tournament basic information.
 */
import PropTypes from 'prop-types';

const Tournament = ({id, name, year}) => ({
  id   : id,
  name : name,
  year : year
});

Tournament.propTypes = {
  id   : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired
};

module.exports = Tournament;