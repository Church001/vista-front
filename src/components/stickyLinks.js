import React from 'react';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Facebook } from 'assets/svg/fb.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';

export default function StickyLinks() {
  return (
    <div class='icon-bar'>
      <a href='twitter.com' class='twitter'>
        <Twitter />
      </a>
      <a href='facebook.com' class='facebook'>
        <Facebook />
      </a>
      <a href='instagram.com' class='instagram'>
        <Instagram />
      </a>
      <a href='linkedin.com' class='linkedin'>
        <Linkedin />
      </a>
    </div>
  );
}
