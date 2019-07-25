import React from 'react';
import PropTypes from 'prop-types';

export const ExploreCard = ({ img, text }) => {
  return (
    <div className='card explore-card'>
      <div
        className='explore-card__header'
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className='explore-card__body'>
        <p className='text text--xs c-off-dark text-center mb-0'>{text}</p>
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
};
