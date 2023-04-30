import { ADD_COMMENT } from "../constants/actionTypes";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});
