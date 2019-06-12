/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import botb from './features/botb/reducers';

const rootReducer = history =>
  combineReducers({
    features: combineReducers({
      botb: botb,
    }),
    router: connectRouter(history),
  });

export default rootReducer;
