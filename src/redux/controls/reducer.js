import {actionTypes} from './actions';

const initState = {
  drawerShow: false,
  splash: true,
};

export default function ControlsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawerShow: !state.drawerShow,
      };
    case actionTypes.HIDE_SPLASH:
      return {
        ...state,
        splash: false,
      };
    default:
      return state;
  }
}
