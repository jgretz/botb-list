import {createSelector} from 'reselect';
import beersSelector from './beersSelector';
import breweryFromPropsSelector from './breweryFromPropsSelector';

export default createSelector(
  beersSelector,
  breweryFromPropsSelector,
  (beers, brewery) => beers.filter(b => b.brewery === brewery),
);
