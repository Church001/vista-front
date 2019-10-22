import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as RightArrow } from 'assets/svg/right-arrow-dark.svg';

export const ProductCard = ({ color, icon, link, subtitle, title }) => {
  return (
    <div className={`card product-card product-card--c-${color}`}>
      <div className='product-card__body'>
        <div className='header'>
          <div className='product-card__icon'>
            <img src={icon} alt='' />
          </div>
          <h5 className='title text text--sm fw-semi text-center'>{title}</h5>
          <h6 className='subtitle text text--xs c-off-dark text-center'>
            {subtitle}
          </h6>
        </div>

        <Link className='product-card__link' to={link}>
          <RightArrow />
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.any,
  link: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export const ProductCardLoading = ({ color, icon, link, subtitle, title }) => {
  return (
    <div className={`card product-card product-card--c-${color}`}>
      <div className='product-card__body'>
        <div className='header'>
          <div className='product-card__icon'>
            <h3>Loading...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
