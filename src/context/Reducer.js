import { SET_CATEGORY_ID, SET_ERROR } from '../context/Constants';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        page_id: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
