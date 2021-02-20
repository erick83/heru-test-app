export const namespace = 'users';

export const actionTypes = {
  GET_USERS: `[${namespace}]/GET`,
  STORE_USERS: `[${namespace}]/STORE`,
};

export const actionCreators = {
  getUsers: () => ({type: actionTypes.GET_USERS}),
  storeUsers: () => ({type: actionTypes.STORE_USERS}),
};
