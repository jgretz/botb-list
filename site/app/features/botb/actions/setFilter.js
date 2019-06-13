export const SET_FILTER = 'SET_FILTER';

export const setFilter = (search, notTasted) => ({
  type: SET_FILTER,
  payload: {search, notTasted},
});
