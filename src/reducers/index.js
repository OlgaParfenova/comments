import { ADD_COMMENT } from "../constants/actionTypes";

const initialState = {
  comments: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
