import {createSelector} from 'reselect';
import allBeersSelector from './allBeersSelector';
import filterSelector from './filterSelector';
import checklistSelector from './checklistSelector';

export default createSelector(
  allBeersSelector,
  filterSelector,
  checklistSelector,
  (beers, {search, notTasted}, checklist) =>
    beers.filter(beer => {
      if (notTasted && checklist.includes(beer.id)) {
        return false;
      }

      if (search.length === 0) {
        return true;
      }

      if (beer.name.toLowerCase().startsWith(search.toLowerCase())) {
        return true;
      }

      if (beer.brewery.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }

      if (beer.type.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }

      return false;
    }),
);
