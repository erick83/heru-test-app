import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {usersSaga} from '../sagas/users';
import usersReducer from './users/reducer';
import controlsReducer from './controls/reducer';

const sagaMiddleware = createSagaMiddleware();

const state = combineReducers({
  users: usersReducer,
  controls: controlsReducer,
});

const store = createStore(state, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(usersSaga);

export default store;
