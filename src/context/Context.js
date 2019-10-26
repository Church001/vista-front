import React from 'react';

const initialState = {
  page_id: '',
  gollum: ''
};

const GeneralState = React.createContext(initialState);

export default GeneralState;
