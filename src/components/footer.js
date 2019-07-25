import React from 'react';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <ul className='footer__menu'>
              <li className='footer__menu__item'>
                <a href='#' className='footer__menu__link text c-off-dark'>
                  About
                </a>
              </li>
              <li className='footer__menu__item'>
                <a href='#' className='footer__menu__link text c-off-dark'>
                  Our Products
                </a>
              </li>

              <li className='footer__menu__item'>
                <a href='#' className='footer__menu__link text c-off-dark'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-6'>
            <p className='footer__copyright text c-off-dark'>
              <span className='text fw-bold'>pts.</span>
              Copyright 2019. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
