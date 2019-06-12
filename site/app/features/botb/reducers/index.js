/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import beers from './beers.js';
import filter from './filter.js';

export default combineReducers({
  beers,
  filter,
});
