import {stateReducer} from '@truefit/redux-utils';
import produce from 'immer';

import {SET_FILTER} from '../actions';

const INITIAL = {
  search: '',
  notTasted: false,
};

export default stateReducer(INITIAL, {
  [SET_FILTER]: (state, {search, notTasted}) =>
    produce(state, draft => {
      draft.search = search;
      draft.notTasted = notTasted;
    }),
});
