export const namespace = 'controls';

export const actionTypes = {
  TOGGLE_DRAWER: `[${namespace}]/TOGGLE DRAWER`,
  HIDE_SPLASH: `[${namespace}]/HIDE SPLASH`,
};

export const actionCreators = {
  toggleDrawer: () => ({type: actionTypes.TOGGLE_DRAWER}),
  hideSplash: () => ({type: actionTypes.HIDE_SPLASH}),
};
