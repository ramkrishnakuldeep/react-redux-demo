import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(reduxImmutableStateInvariant(), thunk, createLogger));
}