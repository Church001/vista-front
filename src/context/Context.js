import React from 'react';

const initialState = {
  page_id: '',
  error: {},
  products: [],
  page_title: 'Home'
};

const GeneralState = React.createContext(initialState);

export default GeneralState;
