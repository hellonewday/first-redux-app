import { FETCH_POSTS, ADD_POSTS } from "../actions/types";

const initalState = {
  items: [],
  item: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_POSTS:
      return {
        ...state,
        item: action.payload
      };
  }
}
