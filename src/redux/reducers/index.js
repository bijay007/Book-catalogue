import { combineReducers } from 'redux';
import bookReducers from './bookReducers';
import modalReducers from './modalReducers';
import tableReducers from './tableReducers';

const rootReducer = combineReducers({
  bookListState: bookReducers,
  modalState: modalReducers,
  tableState: tableReducers,
});

export default rootReducer;
