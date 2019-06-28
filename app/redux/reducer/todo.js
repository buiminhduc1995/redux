import { ADD ,TOGGLE } from "../type";
const initState = {
  array: [],
  name: "",
};
export default function todo(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        array:[...state.array,{name:action.name}]
      };
    default:
      return state;
  }
}
