import React from 'react';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Facebook } from 'assets/svg/fb.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const SocialLinks = ({ alternate }) => {
  return (
    <div
      className={cx('sl', {
        'sl--alternate': alternate
      })}
    >
      <div className='sl__item'>
        <a href='https://twitter.com/Vista_Intl' className='sl__link'>
          <Twitter />
        </a>
      </div>

      <div className='sl__item'>
        <a
          href='https://www.facebook.com/vistainternationalltd/'
          className='sl__link'
        >
          <Facebook />
        </a>
      </div>

      <div className='sl__item'>
        <a href='https://www.instagram.com/vista_intl/' className='sl__link'>
          <Instagram />
        </a>
      </div>

      <div className='sl__item'>
        <a
          href='https://www.linkedin.com/company/vista-international-ltd/'
          className='sl__link'
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

SocialLinks.propTypes = {
  alternate: PropTypes.bool
};
