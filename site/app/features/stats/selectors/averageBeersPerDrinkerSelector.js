import {createSelector} from 'reselect';
import beersDrankSelector from './beersDrankSelector';
import drinkersSelector from './drinkersSelector';

export default createSelector(
  beersDrankSelector,
  drinkersSelector,
  (beerCnt, drinkerCnt) => parseFloat(beerCnt) / drinkerCnt,
);
