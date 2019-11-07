import React, { createRef, useEffect, useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Nav as BNav,
  NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink as NavLinks } from 'react-router-hash-link';

import logo from 'assets/img/logo.png';
import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import cx from 'classnames';
import PropTypes from 'prop-types';
import GeneralState from 'context/Context';
import { SET_CATEGORY_ID } from 'context/Constants';
import history from '../history';

export const Nav = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [menuMargin, setMenuMargin] = useState(0);
  const [products, setProducts] = useState([]);
  const phoneBtn = createRef();
  const { state, dispatch } = useContext(GeneralState);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const setId = id => {
    dispatch({
      type: SET_CATEGORY_ID,
      payload: id
    });
    history.push(`/products/${id}`);
  };

  useEffect(() => {
    if (!phoneBtn.current || !phoneBtn.current.getBoundingClientRect().width)
      return;
    if (window.innerWidth > 576) {
      setMenuMargin(phoneBtn.current.getBoundingClientRect().width + 30);
    } else {
      setMenuMargin(0);
    }
  }, [window.innerWidth, phoneBtn, phoneBtn.current]);

  useEffect(() => {
    const handleResize = () => {
      if (!phoneBtn.current || !phoneBtn.current.getBoundingClientRect().width)
        return;
      if (window.innerWidth > 576) {
        setMenuMargin(phoneBtn.current.getBoundingClientRect().width + 30);
      } else {
        setMenuMargin(0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      // if (history.location && history.location.pathname === '/location') {
      //   setActive(true);
      // } else {
      if (window.pageYOffset > 30) {
        setActive(true);
      } else {
        setActive(false);
      }
      // }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (state.products) {
      setProducts(state.products);
    }
  }, [state, products]);

  return (
    <Navbar
      expand='lg'
      className={cx('nav__bar', {
        'nav__bar--fixed': props.fixed,
        active: active || isOpen
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
            style={{ marginRight: menuMargin }}
          >
            <NavItem className='nav__item'>
              <NavLink exact className='nav__link' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem className='nav__item'>
              <a
                // onClick={() => alert("ONCLICK")}
                className='nav__link'
                href='/#about'
              >
                About
              </a>
            </NavItem>

            {/* <NavItem className='nav__item'>
              <a className='nav__link' href='/#products'>
                Our Products
              </a>
            </NavItem> */}
            <UncontrolledDropdown className='nav__item' nav inNavbar>
              <DropdownToggle className='nav__link' nav caret>
                Our Products
              </DropdownToggle>
              {products.length !== 0 && (
                <DropdownMenu right>
                  {products.map(product => {
                    return (
                      <DropdownItem
                        key={product.id}
                        onClick={() => setId(product.id)}
                      >
                        {product.title}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              )}
            </UncontrolledDropdown>

            <NavItem className='nav__item'>
              <a className='nav__link' href='/#services'>
                Our Services
              </a>
            </NavItem>

            <NavItem className='nav__item'>
              <NavLinks className='nav__link' to='/location'>
                Contact Us
              </NavLinks>
            </NavItem>

            <NavItem className='nav__item special'>
              <a href='#' ref={phoneBtn} className='nav__link'>
                <Phone /> +234 (0) 816 911 0000
              </a>
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
