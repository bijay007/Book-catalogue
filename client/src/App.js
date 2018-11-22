import React, { Component } from 'react';
import { css } from 'emotion';
import BookTable from './components/table/mainTable';
import MainModal from './components/modal/mainModal';
import AddUpdateBook from './components/addUpdateBook';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  width: '550px',
  marginLeft: '150px',
  border: '2px solid blue',
  boxShadow: '1px 1px 2px 1px',
});
const image = css({
  padding: '5px',
  maxWidth: '40px',
});
const menu = css({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
});
const addBtn = css({
  border: 'none',
  background: 'none',
});
const visible = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
});
const hidden = css({
  display: 'none',
});
const contents = css({
  display: 'flex',
});

export default class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      listOfBooks: [],
      showModal: false,
      bookToEdit: {},
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.displayBooks = this.displayBooks.bind(this);
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  addBook(book) {
    const { listOfBooks } = this.state;
    this.setState({ listOfBooks: [...listOfBooks, book] }, () => this.displayBooks());
  }

  deleteBook(index) {
    const { listOfBooks } = this.state;
    listOfBooks.splice(index, 1);
    this.setState({ listOfBooks: [...listOfBooks] });
  }

  removeGenre(id) {
    const { listOfBooks } = this.state;
    const bookIndex = listOfBooks.findIndex(book => book.uniqueId === id);
    listOfBooks[bookIndex].genre = '';
    this.setState({ listOfBooks: [...listOfBooks] });
  }

  editBook(id) {
    const { listOfBooks } = this.state;
    const bookIndex = listOfBooks.findIndex(book => book.uniqueId === id);
    this.setState({ bookToEdit: listOfBooks[bookIndex] }, this.openModal());
  }

  displayBooks() {
    const { listOfBooks } = this.state;
    return (
      <BookTable
        books={listOfBooks}
        deleteBook={this.deleteBook}
        removeGenre={this.removeGenre}
        editBook={this.editBook}
      />
    );
  }

  render() {
    const { showModal, bookToEdit } = this.state;
    const showBooks = this.displayBooks();
    return (
      <div className={container}>
        <div className={menu}>
          <div className={image}>
            <img src="/client/public/assests/icons/main_logo.svg" alt="logo" className={image} />
          </div>
          <button type="button" className={addBtn} onClick={this.openModal}>
            <img src="/client/public/assests/icons/add_book.svg" alt="addbtn" className={image} />
          </button>
        </div>
        <div className={showModal ? visible : hidden}>
          <MainModal>
            <AddUpdateBook
              closeModal={this.closeModal}
              addBook={this.addBook}
              editBook={this.editBook}
              bookToEdit={bookToEdit}
            />
          </MainModal>
        </div>
        <div className={contents}>
          { showBooks }
        </div>
      </div>
    );
  }
}
