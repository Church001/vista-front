import React from 'react';
import PropTypes from 'prop-types';

export const LocationCard = ({ text, ntext, otext }) => {
  return (
    <div className='card location-card'>
      <div className='location-card__header'>{text}</div>
      <div className='location-card__address'>{ntext}</div>
      <div className='location-card__tell'>{otext}</div>
    </div>
  );
};

LocationCard.propTypes = {
  text: PropTypes.string,
  ntext: PropTypes.string,
  otext: PropTypes.string
};
