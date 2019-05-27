import { combineReducers } from 'redux';
import bookReducers from './bookReducers';

const rootReducer = combineReducers({
  bookReducers,
});

export default rootReducer;
