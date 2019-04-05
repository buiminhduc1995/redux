import { INCREASE, DECREASE } from "../type/";
const initState = {
  value: 1
};
export default function count(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREASE:
    return {
        ...state,
        value:state.value - 1
    }
    default:
      return state;
  }
}
