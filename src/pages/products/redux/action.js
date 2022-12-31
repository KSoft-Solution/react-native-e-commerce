import {
  PRODUCT_FAILED,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
} from "./constant";
import { productServices } from "../../../config/services";

export const productAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    dispatch({ type: CATEGORY_REQUEST });
    const { data } = await productServices.getAllProducts();
    const category = await productServices.getAllCategories();

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
    dispatch({
      type: CATEGORY_SUCCESS,
      payload: category,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAILED,
      payload: error.response.data,
    });
  }
};
