/**
 * File: ./models/Stadium.js
 * Author: Daniel Hovadick
 * 
 * Defines a Stadium basic information.
 */
import PropTypes from 'prop-types';

const Stadium = ({id, name, city, state}) => ({
  id    : id,
  name  : name,
  city  : city,
  state : state
});

Stadium.propTypes = {
  id    : PropTypes.number.isRequired,
  name  : PropTypes.string.isRequired,
  city  : PropTypes.string.isRequired,
  state : PropTypes.string.isRequired
};

module.exports = Stadium;