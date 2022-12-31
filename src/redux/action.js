import { bindActionCreators } from "redux";
import * as productAction from "../pages/products/redux/action";
import * as productCategoryAction from "../pages/categoryProduct/redux/action";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...productAction,
      ...productCategoryAction,
    },
    dispatch
  );
}

export default mapDispatchToProps;
