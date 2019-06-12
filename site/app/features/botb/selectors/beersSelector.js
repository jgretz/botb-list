import {createSelector} from 'reselect';
import allBeersSelector from './allBeersSelector';
import filterSelector from './filterSelector';

export default createSelector(
  allBeersSelector,
  filterSelector,
  beers => beers,
);
