// import {post} from '@truefit/http-utils';
import uuid from 'uuid';

const USER = 'user';

export const USER_REGISTERED = 'USER_REGISTERED';
export const registerUser = () => {
  let userId = localStorage.getItem(USER);
  if (!userId) {
    userId = uuid();

    // post('/webuser', {
    //   webUserId: userId,
    // });

    localStorage.setItem(USER, userId);
  }

  return {
    type: 'USER_REGISTERED',
    payload: userId,
  };
};
