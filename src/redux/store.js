import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import _ from "lodash";
import { batchedSubscribe } from "redux-batched-subscribe";

import reducer from "./reducer";
const debounceNotify = _.debounce((notify) => notify());

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [batchedSubscribe(debounceNotify)],
});

export default store;