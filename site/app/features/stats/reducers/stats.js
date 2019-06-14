import {stateReducer} from '@truefit/redux-utils';
import produce from 'immer';

import {
  CONNECTED_TO_SOCKET,
  CHECKLIST_ADDITION,
  CHECKLIST_SUBTRACTION,
} from '../actions';

export default stateReducer([], {
  [CONNECTED_TO_SOCKET]: (_, payload) => payload,

  [CHECKLIST_ADDITION]: (state, payload) =>
    produce(state, draft => {
      draft.push(payload);
    }),

  [CHECKLIST_SUBTRACTION]: (state, payload) =>
    produce(state, draft => {
      draft.splice(draft.findIndex(s => s === payload.id), 1);
    }),
});
