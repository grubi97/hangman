import { useReducer } from "react";
import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import randomwordreducer from "./randomwordReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  randomword: randomwordreducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
