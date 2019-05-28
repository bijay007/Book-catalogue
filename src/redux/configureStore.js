import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

export default function configureStore(initialState) {
  // add support for redux devtools
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducers,
    initialState,
    composeEnhancer(
      applyMiddleware(
        reduxImmutableStateInvariant(), thunk,
      ),
    ),
  );
}
