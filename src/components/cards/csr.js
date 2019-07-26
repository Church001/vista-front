import React from 'react';
import PropTypes from 'prop-types';

export const CSRCard = ({ color, icon, number, subtitle, title }) => {
  return (
    <div className={`card csr-card csr-card--c-${color}`}>
      <div className='csr-card__body'>
        <h5 className='title text text--sm text-center fw-semi'>{title}</h5>
        <h6 className='subtitle text text--xs text-center c-off-dark'>
          {subtitle}
        </h6>

        <div className='csr-card__icon'>{icon}</div>
      </div>

      <div className='csr-card__header'>
        <span className='text fw-semi c-white'>{number}</span>
      </div>
    </div>
  );
};

CSRCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.node,
  number: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};
