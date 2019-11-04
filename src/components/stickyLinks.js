import React from 'react';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Facebook } from 'assets/svg/fb.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';

export default function StickyLinks() {
  return (
    <div className='icon-bar'>
      <a href='https://twitter.com/Vista_Intl' className='twitter'>
        <Twitter />
      </a>
      <a
        href='https://www.facebook.com/vistainternationalltd/'
        className='facebook'
      >
        <Facebook />
      </a>
      <a href='https://www.instagram.com/vista_intl/' className='instagram'>
        <Instagram />
      </a>
      <a
        href='https://www.linkedin.com/company/vista-international-ltd/'
        className='linkedin'
      >
        <Linkedin />
      </a>
    </div>
  );
}
