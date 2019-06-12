import _ from 'lodash';
import {createSelector} from 'reselect';
import beersSelector from './beersSelector';
import categoryFromPropsSelector from './categoryFromPropsSelector';

export default createSelector(
  beersSelector,
  categoryFromPropsSelector,
  (beers, category) => {
    const beersForCatgegory = beers.filter(b => b.category === category);

    return _.uniq(beersForCatgegory.map(b => b.brewery));
  },
);
