import {configureStore, Action} from "@reduxjs/toolkit";
import {ThunkAction} from "redux-thunk";

import reducers, {RootState} from "./reducers";

const store = configureStore({
  reducer: reducers,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers", () => {
    const newRootReducer = require("./reducers").default;
    store.replaceReducer(newRootReducer);
  });
}

export type DispatchType = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
