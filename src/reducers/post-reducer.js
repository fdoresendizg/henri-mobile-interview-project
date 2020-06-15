import { POSTS_SUCCESS, POSTS_FAILURE, DELETE_POST_SUCCESS } from '../actions';

const INITIAL_STATE = Object.create({
  posts: [],
  error: null,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'POSTS_SUCCESS':
      return Object.assign({}, state, { posts: action.payload });
    case 'POSTS_FAILURE':
      return Object.assign({}, state, { errors: action.payload });
    case 'DELETE_POST_SUCCESS':
      const postId = action.payload;
      let posts = [...state.posts];
      const found = posts.findIndex(post => post.id === postId);
      posts.splice(found, 1);
      return Object.assign({}, state, { posts });
    default:
      return state;
  }
};