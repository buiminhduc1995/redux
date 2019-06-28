import { ADD_CART, REMOVE_FROM_CART } from "../type/";
const initState = {
  value: 0,
  array: [],
  name: ""
};
export default function cart(state = initState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        value: state.value + 1,
        array: [action.payload, ...state.array]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        array:state.array.filter(cartItem => cartItem.id !== action.payload.id),
        value:state.value - 1
      };
    default:
      return state;
  }
}
