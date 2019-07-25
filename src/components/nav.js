import React, { createRef, useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as BNav,
  NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const Nav = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuMargin, setMenuMargin] = useState(100);
  const phoneBtn = createRef();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!phoneBtn.current || !phoneBtn.current.getBoundingClientRect().width)
      return;
    setMenuMargin(phoneBtn.current.getBoundingClientRect().width);
  }, [window.innerWidth, phoneBtn, phoneBtn.current]);

  useEffect(() => {
    const handleResize = () => {
      if (!phoneBtn.current || !phoneBtn.current.getBoundingClientRect().width)
        return;
      setMenuMargin(phoneBtn.current.getBoundingClientRect().width);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Navbar
      expand='lg'
      className={cx('nav__bar', {
        'nav__bar--fixed': props.fixed
      })}
    >
      <div className='container'>
        <NavbarBrand className='nav__brand' tag={Link} to='/'>
          <img src={logo} alt='Vista International' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} aria-label='Nav Toggler' />
        <Collapse isOpen={isOpen} navbar>
          <BNav
            className='ml-auto nav__list'
            navbar
            style={{ marginRight: menuMargin + 30 }}
          >
            <NavItem className='nav__item'>
              <NavLink className='nav__link' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem className='nav__item'>
              <NavLink className='nav__link' to='/about-us'>
                About
              </NavLink>
            </NavItem>

            <NavItem className='nav__item'>
              <NavLink className='nav__link' to='/explore'>
                Our Products
              </NavLink>
            </NavItem>

            <NavItem className='nav__item'>
              <NavLink className='nav__link' to='/contact-us'>
                Contact Us
              </NavLink>
            </NavItem>

            <NavItem className='nav__item special'>
              <NavLink ref={phoneBtn} className='nav__link' to='/agents'>
                <Phone /> +234 81 840 152 xx
              </NavLink>
            </NavItem>
          </BNav>
        </Collapse>
      </div>
    </Navbar>
  );
};

Nav.propTypes = {
  fixed: PropTypes.bool
};
