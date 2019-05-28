const addBook = book => ({
  type: 'ADD_BOOK', book,
});

const editBook = index => ({
  type: 'EDIT_BOOK', index,
});

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
