/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import stats from './stats.js';
import user from './user.js';

export default combineReducers({
  stats,
  user,
});
