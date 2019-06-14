import {post, del} from '@truefit/http-utils';
import {SET_CHECK_BEER} from '../../botb/actions';

export default store => next => action => {
  if (action.type !== SET_CHECK_BEER) {
    return next(action);
  }

  const userId = store.getState().features.stats.user;
  const beerId = action.payload.beer.id;
  const checked = action.payload.check;

  if (checked) {
    post('/checklist', {webUserId: userId, beerId});
  } else {
    del(`/checklist?webUserId=${userId}&beerId=${beerId}`);
  }

  return next(action);
};
