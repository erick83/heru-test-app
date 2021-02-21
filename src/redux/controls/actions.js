export const namespace = 'controls';

export const actionTypes = {
  TOGGLE_DRAWER: `[${namespace}]/TOGGLE DRAWER`,
};

export const actionCreators = {
  toggleDrawer: () => ({type: actionTypes.TOGGLE_DRAWER}),
};
