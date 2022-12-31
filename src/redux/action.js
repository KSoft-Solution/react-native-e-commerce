import { bindActionCreators } from "redux";
import * as productAction from "../pages/products/redux/action";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...productAction,
    },
    dispatch
  );
}

export default mapDispatchToProps;
