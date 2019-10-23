const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ID':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
