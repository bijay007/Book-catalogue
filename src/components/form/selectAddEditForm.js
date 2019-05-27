import React from 'react';
import AddBookForm from './addBookForm';
import EditBookForm from './editBookForm';
import { findObjWithKey } from '../../common/helpers';

const AddUpdateBook = (props) => {
  const {
    listOfBooks, addBook, updateBook, closeFormModal,
  } = props;
  const bookToEdit = findObjWithKey(listOfBooks, 'index');
  const formToShow = bookToEdit.name === undefined
    ? (
      <AddBookForm
        addBook={addBook}
        closeFormModal={closeFormModal}
      />
    )
    : (
      <EditBookForm
        updateBook={updateBook}
        closeFormModal={closeFormModal}
        bookToEdit={bookToEdit}
      />
    );
  return formToShow;
};

export default AddUpdateBook;
