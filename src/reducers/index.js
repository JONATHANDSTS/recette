import { combineReducers } from 'redux';
import recipes from './recipes';
import user from './user';
// import counter from './counter';

export default combineReducers({
  // counter,
  recipes,
  user,
});
