import { combineReducers } from "react-redux";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
