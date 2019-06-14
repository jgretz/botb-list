import _ from 'lodash';
import {createSelector} from 'reselect';
import statsSelector from './statsSelector';

export default createSelector(
  statsSelector,
  stats => _.uniqBy(stats, s => s.beerid).length,
);
