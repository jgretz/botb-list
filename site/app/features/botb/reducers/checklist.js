import {stateReducer} from '@truefit/redux-utils';
import produce from 'immer';
import {SET_CHECK_BEER} from '../actions';

const CHECKLIST = 'CHECKLIST';
const INITIAL = JSON.parse(localStorage.getItem(CHECKLIST) || '[]');

export default stateReducer(INITIAL, {
  [SET_CHECK_BEER]: (state, {beer, check}) => {
    const nextState = produce(state, draft => {
      if (check) {
        draft.push(beer.id);
      } else {
        draft.splice(draft.findIndex(b => b === beer.id), 1);
      }
    });

    localStorage.setItem(CHECKLIST, JSON.stringify(nextState));

    return nextState;
  },
});
