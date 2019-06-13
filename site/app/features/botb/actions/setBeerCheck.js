export const SET_CHECK_BEER = 'SET_CHECK_BEER';

export const setBeerCheck = (beer, check) => ({
  type: SET_CHECK_BEER,
  payload: {beer, check},
});
