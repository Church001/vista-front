import React from 'react';

const initialState = {
  page_id: '',
  error: {},
  products: [],
  page_title: 'Home',
  product_items: []
};

const GeneralState = React.createContext(initialState);

export default GeneralState;
