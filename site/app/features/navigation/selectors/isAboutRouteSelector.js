import {createSelector} from 'reselect';
import routeSelector from './routeSelector';

export default createSelector(
  routeSelector,
  route => route?.pathname === '/about',
);
