import {stateReducer} from '@truefit/redux-utils';
// import produce from 'immer';

const INITIAL = {
  type: null,
  toDrink: false,
};

export default stateReducer(INITIAL, {});
