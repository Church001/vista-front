import {
  SET_CATEGORY_ID,
  SET_ERROR,
  SET_PRODUCTS,
  SET_PRODUCT_TITLE,
  SET_PRODUCT_ITEM
} from '../context/Constants';

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
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SET_PRODUCT_TITLE:
      return {
        ...state,
        page_title: action.payload
      };
    case SET_PRODUCT_ITEM:
      return {
        ...state,
        product_items: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
