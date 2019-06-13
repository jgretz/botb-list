import {createSelector} from 'reselect';
import beerFromPropsSelector from './beerFromPropsSelector';
import checklistSelector from './checklistSelector';

export default createSelector(
  checklistSelector,
  beerFromPropsSelector,
  (checklist, beer) => checklist.includes(beer.id),
);
