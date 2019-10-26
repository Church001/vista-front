import React, { useContext, useReducer } from 'react';
import Router from './Router';
import GeneralState from './context/Context';
import productReducer from './context/Reducer';

function App() {
  const initialState = useContext(GeneralState);
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <GeneralState.Provider value={{ state, dispatch }}>
      <Router />
    </GeneralState.Provider>
  );
}
//
export default App;
