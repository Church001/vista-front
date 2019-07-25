import React from 'react';
import { ContactForm, Nav, Footer } from 'components';
import PropTypes from 'prop-types';

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
