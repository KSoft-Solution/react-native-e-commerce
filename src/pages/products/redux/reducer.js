import {
  PRODUCT_FAILED,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  CATEGORY_FAILED,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
} from "./constant";

const initial_state = {
  loading: false,
  products: [],
  error: "",
  categories: [],
};

const product_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case PRODUCT_FAILED:
      return {
        error: action.payload,
      };
    case CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case CATEGORY_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default product_reducer;
