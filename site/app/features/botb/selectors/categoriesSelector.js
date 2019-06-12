import _ from 'lodash';
import {createSelector} from 'reselect';
import beersSelector from './beersSelector';

export default createSelector(
  beersSelector,
  beers => _.uniq(beers.map(x => x.category)),
);
