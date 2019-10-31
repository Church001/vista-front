import React from 'react';

const initialState = {
  page_id: '',
  error: {}
};

const GeneralState = React.createContext(initialState);

export default GeneralState;
