import { USERS_SUCCESS, USERS_FAILURE } from '../actions';

const INITIAL_STATE = Object.create({
  users: [],
  error: null,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USERS_SUCCESS':
      return Object.assign({}, state, { users: action.payload });
    case 'USERS_FAILURE':
      return Object.assign({}, state, { errors: action.payload });
    default:
      return state;
  }
};