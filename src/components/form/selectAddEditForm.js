import React from 'react';
import { connect } from 'react-redux';
import AddBookForm from './addBookForm';
import EditBookForm from './editBookForm';
import { findObjWithKey } from '../../common/helpers';

const AddUpdateBook = (props) => {
  const { listOfBooks } = props;
  const bookToEdit = findObjWithKey(listOfBooks, 'index');
  if (bookToEdit.name === undefined) return <AddBookForm />
  return <EditBookForm bookToEdit={bookToEdit}/>
};

const mapStateToProps = (state) => ({
  listOfBooks: state.bookListState.listOfBooks
})

export default connect(mapStateToProps)(AddUpdateBook);
