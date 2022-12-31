import {
  PRODUCT_CATEGORY_FAILED,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
} from "./constant";

import { productServices } from "../../../config/services";

export const productCategoryAction = (category_name) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CATEGORY_REQUEST });
    const { data } = await productServices.getCategoryProduct(category_name);

    dispatch({
      type: PRODUCT_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_FAILED,
      payload: error.response.data,
    });
  }
};
