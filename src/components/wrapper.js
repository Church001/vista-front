import React from 'react';
import { Nav, Footer } from 'components';
import PropTypes from 'prop-types';
import ContactForm from './contact';

export const Wrapper = props => (
  <div className='wrapper'>
    <Nav fixed />
    {props.children}
    <ContactForm />
    <Footer />
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node
};
