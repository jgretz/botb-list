import {createSelector} from 'reselect';
import statsSelector from './statsSelector';

export default createSelector(
  statsSelector,
  stats => stats.length,
);
