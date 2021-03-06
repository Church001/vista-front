import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as RightArrow } from 'assets/svg/right-arrow-dark.svg';
import { SET_CATEGORY_ID, SET_PRODUCT_TITLE } from '../../context/Constants';
import GeneralState from '../../context/Context';

export const ProductCard = ({
  color,
  icon,
  link,
  subtitle,
  title,
  id,
  slug
}) => {
  const { dispatch } = useContext(GeneralState);
  const setID = id => {
    const payload = id;
    const type = SET_CATEGORY_ID;
    dispatch({
      type,
      payload
    });
    dispatch({
      type: SET_PRODUCT_TITLE,
      payload: slug
    });
  };
  // console.log(""icon)
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

        <Link
          className='product-card__link'
          onClick={() => setID(id)}
          to={link + '/' + id}
        >
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
  title: PropTypes.string,
  id: PropTypes.string
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
