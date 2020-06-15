import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import PostReducer from './post-reducer';

export default combineReducers({
  usersInfo: UserReducer,
  feed: PostReducer,
});