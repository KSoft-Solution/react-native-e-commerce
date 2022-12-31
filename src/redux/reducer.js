import { combineReducers } from "redux";
import product_reducer from "../pages/products/redux/reducer";
import productCategory_reducer from "../pages/categoryProduct/redux/reducer";

const rootReducer = combineReducers({
  productReducer: product_reducer,
  categoryProductReducer: productCategory_reducer,
});

export default rootReducer;
