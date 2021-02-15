import {combineReducers} from "@reduxjs/toolkit";

import library from "./slices/library";

const reducers = combineReducers({library});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
