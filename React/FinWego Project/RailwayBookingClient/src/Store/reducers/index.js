import { combineReducers } from 'redux';
import user from './Users';
import Train from './Trains';

export default combineReducers({
  user,
  Train,
});
