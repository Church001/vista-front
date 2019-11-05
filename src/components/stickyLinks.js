import React from 'react';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Facebook } from 'assets/svg/fb.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';

export default function StickyLinks() {
  return (
    <div className='icon-bar'>
      <a href='twitter.com' className='twitter'>
        <Twitter />
      </a>
      <a href='facebook.com' className='facebook'>
        <Facebook />
      </a>
      <a href='instagram.com' className='instagram'>
        <Instagram />
      </a>
      <a href='linkedin.com' className='linkedin'>
        <Linkedin />
      </a>
    </div>
  );
}
