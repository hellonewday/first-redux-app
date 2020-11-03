import { FETCH_POSTS, ADD_POSTS } from "./types";
import Axios from "axios";

export const fetchPosts = () => dispatch => {
  console.log("Fetch");
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const createPost = postData => dispatch => {
  
  Axios.post(`https://jsonplaceholder.typicode.com/posts`, postData).then(
    response =>
      dispatch({
        type: ADD_POSTS,
        payload: response.data
      })
  );
};
