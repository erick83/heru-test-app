import {createStore, applyMiddleware, combineReducers} from 'redux';

import usersReducer from './users/reducer';

const state = combineReducers({
  users: usersReducer,
});

const store = createStore(state);

export default store;
