import { combineReducers } from "redux";
import count from "./count";
import todo from "./todo"
import cart from './cart'
const AppReducer = combineReducers({
  count,
  todo,
  cart
});
export default AppReducer;
