import { combineReducers, compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import tablesRedux from './tablesRedux';
//import thunk from 'redux-thunk';

const subreducers = {
  tables: tablesRedux,
  init: initialState,

}

const reducer = combineReducers(subreducers);

const store = configureStore({ reducer });
  // reducer,
  // initialState,

  //compose(
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  //)


export default store;