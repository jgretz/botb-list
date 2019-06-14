import _ from 'lodash';
import {createSelector} from 'reselect';
import statsSelector from './statsSelector';

export default createSelector(
  statsSelector,
  stats => {
    const groups = _.groupBy(stats, x => x.webuserid);
    const counts = Object.values(groups).map(x => x.length);

    return _.max(counts);
  },
);
