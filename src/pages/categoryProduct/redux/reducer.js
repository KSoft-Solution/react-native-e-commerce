import {
  PRODUCT_CATEGORY_FAILED,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
} from "./constant";

const initial_state = {
  loading: false,
  error: "",
  product_categories: [],
};

const productCategory_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        product_categories: action.payload,
      };
    case PRODUCT_CATEGORY_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productCategory_reducer;
