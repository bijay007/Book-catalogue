import React, { Component } from 'react';
import { css } from 'emotion';
import BookTable from './components/table/mainTable';
import MainModal from './components/modal/mainModal';
import AddUpdateBook from './components/addUpdateBook';
import { removeObjFromArr } from './helpers/common';
import DropDownMenu from './components/dropdown/mainDropdown';

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
      filteredBooks: [],
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showAllBooks = this.showAllBooks.bind(this);
    this.showFilteredBooks = this.showFilteredBooks.bind(this);
    this.clearBookFilter = this.clearBookFilter.bind(this);
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.editBook = this.editBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  addBook(book) {
    const { listOfBooks } = this.state;
    this.setState({ listOfBooks: [...listOfBooks, book] }, () => this.showAllBooks());
  }

  deleteBook(index) {
    const { listOfBooks } = this.state;
    listOfBooks.splice(index, 1);
    this.setState({ listOfBooks: [...listOfBooks] });
  }

  removeGenre(index) {
    const { listOfBooks } = this.state;
    listOfBooks[index].genre = '';
    this.setState({ listOfBooks: [...listOfBooks] });
  }

  editBook(index) {
    const { listOfBooks } = this.state;
    listOfBooks[index].index = index;
    this.setState({ listOfBooks: [...listOfBooks] }, this.openModal());
  }

  updateBook(book) {
    const { listOfBooks } = this.state;
    const updatedList = removeObjFromArr(listOfBooks, 'index');
    this.setState({ listOfBooks: [...updatedList, book] }, () => this.showAllBooks());
  }

  showFilteredBooks(books) {
    this.setState({ filteredBooks: books });
  }

  clearBookFilter() {
    this.setState({ filteredBooks: [] });
  }

  showAllBooks() {
    const { listOfBooks, filteredBooks } = this.state;
    return (
      <BookTable
        books={filteredBooks.length ? filteredBooks : listOfBooks}
        deleteBook={this.deleteBook}
        removeGenre={this.removeGenre}
        editBook={this.editBook}
      />
    );
  }

  render() {
    const { showModal, listOfBooks } = this.state;
    const bookListView = this.showAllBooks();
    return (
      <div className={container}>
        <div className={menu}>
          <div className={image}>
            <img src="/client/public/assests/icons/main_logo.svg" alt="logo" className={image} />
          </div>
          <DropDownMenu
            listOfBooks={listOfBooks}
            showFilteredBooks={this.showFilteredBooks}
            clearBookFilter={this.clearBookFilter}
          />
          <button type="button" className={addBtn} onClick={this.openModal}>
            <img src="/client/public/assests/icons/add_book.svg" alt="addbtn" className={image} />
          </button>
        </div>
        <div className={showModal ? visible : hidden}>
          <MainModal>
            <AddUpdateBook
              closeModal={this.closeModal}
              addBook={this.addBook}
              updateBook={this.updateBook}
              listOfBooks={listOfBooks}
            />
          </MainModal>
        </div>
        <div className={contents}>
          { bookListView }
        </div>
      </div>
    );
  }
}
