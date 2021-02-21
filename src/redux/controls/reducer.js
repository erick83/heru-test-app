import {actionTypes} from './actions';

const initState = {
  drawerShow: false,
};

export default function ControlsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawerShow: !state.drawerShow,
      };
    default:
      return state;
  }
}
