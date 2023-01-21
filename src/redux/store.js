import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import initialState from './initialState';
import tablesRedux from './tablesRedux';
import statusRedux from './statusRedux';
import thunk from 'redux-thunk';

const subreducers = {
  tables: tablesRedux,
  statuses: statusRedux,
}

const reducer = combineReducers(subreducers);

const store = createStore( 
  reducer, 
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  );


export default store;