import {select, put, take, takeEvery, call} from 'redux-saga/effects';

import {get} from '../services/fetchServices';
import {actionCreators, actionTypes} from '../redux/users/actions';

export function* usersSaga() {
  yield takeEvery(actionTypes.GET_USERS, fetchUsers);
  console.log('Hello Sagas!');
}

function* fetchUsers(action) {
  try {
    const response = yield call(
      get,
      'https://jsonplaceholder.typicode.com/users',
    );
    yield put(actionCreators.storeUsers(response));
  } catch (error) {
    console.log(error);
  }
}
