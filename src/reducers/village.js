import { SELECT_VILLAGE } from "../actions";

const initialState =  "";
const village = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_VILLAGE:
        return action.payload.village ;
      default:
        return state;
    }
  };
  
export default village