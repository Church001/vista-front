import { SET_CATEGORY_ID } from '../context/Constants';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        page_id: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
