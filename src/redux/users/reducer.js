import {actionTypes} from './actions';

const initState = {};

export default function UsersReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.STORE_USERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
