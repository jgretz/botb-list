import _ from 'lodash';
import {createSelector} from 'reselect';
import statsForBeersSelector from './statsForBeersSelector';

export default createSelector(
  statsForBeersSelector,
  stats => {
    return _.sortBy(stats, s => 1 / s.date.valueOf());
  },
);
