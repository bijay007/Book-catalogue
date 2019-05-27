import { combineReducers } from 'redux';
import bookReducers from './bookReducers';
import modalReducers from './modalReducers';

const rootReducer = combineReducers({
  bookListState: bookReducers,
  modalState: modalReducers,
});

export default rootReducer;
