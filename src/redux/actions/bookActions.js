import { openModal } from './modalActions';

const addBook = book => ({
  type: 'ADD_BOOK', book,
});

// Editing should just open a modal which knows what data to load
const editBook = index => (dispatch) => {
  dispatch({ type: 'EDIT_BOOK', index });
  dispatch(openModal());
};

const updateBook = book => ({
  type: 'UPDATE_BOOK', book,
});

const deleteBook = index => ({
  type: 'DELETE_BOOK', index,
});

const removeGenre = index => ({
  type: 'REMOVE_GENRE', index,
});

export {
  addBook,
  editBook,
  updateBook,
  deleteBook,
  removeGenre,
};
