import React from 'react';
// import { Link } from 'react-router-dom';

export const ServiceCard = props => {
  return (
    <div className='card service-card'>
      <div className='service-card__body'>
        <div className='service-card__img'>
          <img src={props.img} alt={props.title} />
        </div>

        <h5 className='title text text--xs fw-semi text-center'>
          {props.title}
        </h5>
        <h6 className='subtitle text text--xs c-off-dark text-center'>
          {props.subtitle}
        </h6>

        {/* <Link className='link text text--sm c-off-dark' to={props.link}>
          LEARN MORE
  </Link> */}
      </div>
    </div>
  );
};
