import {put, takeEvery, call} from 'redux-saga/effects';

import {get} from '../services/fetchServices';
import {actionCreators, actionTypes} from '../redux/users/actions';

export function* usersSaga() {
  yield takeEvery(actionTypes.GET_USERS, fetchUsers);
}

function* fetchUsers(action) {
  try {
    const response = yield call(get);
    yield put(actionCreators.storeUsers(response));
  } catch (error) {
    console.log(error);
  }
}
