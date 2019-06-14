import _ from 'lodash';
import {createSelector} from 'reselect';
import moment from 'moment';

import {allBeersSelector} from '../../botb/selectors';
import statsSelector from './statsSelector';

export default createSelector(
  allBeersSelector,
  statsSelector,
  (beers, stats) => {
    const groups = _.groupBy(stats, x => x.beerid);

    const details = Object.keys(groups).map(id => {
      const beer = _.find(beers, b => parseInt(b.id, 10) === parseInt(id, 10));
      const dates = groups[id].map(s => moment.utc(s.checkdate));

      return {
        id,
        brewery: beer.brewery,
        beer: beer.name,
        count: groups[id].length,
        date: _.max(dates),
      };
    });

    return _.sortBy(details, d => 1 / d.count);
  },
);
