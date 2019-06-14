import {stateReducer} from '@truefit/redux-utils';
import {USER_REGISTERED} from '../actions';

export default stateReducer(null, {
  [USER_REGISTERED]: (_, payload) => payload,
});
