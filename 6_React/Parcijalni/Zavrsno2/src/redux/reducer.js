import { combineReducers } from 'redux';
import { USER_FETCHED, REPOS_FETCHED, REMOVE_USER } from './actions';

const user = (state = null, action) => {
  switch (action.type) {
    case USER_FETCHED:
      return action.payload;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

const repos = (state = [], action) => {
  if (action.type === REPOS_FETCHED) {
    return action.payload;
  } else {
    return state;
  }
};

export default combineReducers({
  user,
  repos,
});
