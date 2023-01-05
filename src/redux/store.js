import { combineReducers, compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesRedux from './tablesRedux';

const subreducers = {
  tables: tablesRedux,
}

const reducer = combineReducers(subreducers);

const store = configureStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;