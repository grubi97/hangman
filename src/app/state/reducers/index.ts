import { useReducer } from "react";
import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ modal: modalReducer, user: userReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
