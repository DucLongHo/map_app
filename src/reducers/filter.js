import { ONCLICK_FILTER } from "../actions";

const initialState =  "";
const filter = (state = initialState, action) => {
    switch (action.type) {
      case ONCLICK_FILTER:
        return action.payload.filter ;
      default:
        return state;
    }
  };
  
export default filter