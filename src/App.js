import React, { Component } from 'react';
import {
  appContainer, appMenu, menuImage, transparentBtn,
} from '@styles/styles';
import OuterTable from './components/table/outerTable';
import AddUpdateBook from './components/form/selectAddEditForm';
import { removeObjFromArr } from './common/helpers';
import DropDownMenu from './components/dropdown/mainDropdown';
import ModalWrapper from './components/common/modal/modalWrapper';

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
      <OuterTable
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
      <main className={appContainer}>
        <header className={appMenu}>
          <div className={menuImage}>
            <img src="/public/assests/icons/main_logo.svg" alt="logo" className={menuImage} />
          </div>
          <DropDownMenu
            listOfBooks={listOfBooks}
            showFilteredBooks={this.showFilteredBooks}
            clearBookFilter={this.clearBookFilter}
          />
          <button type="button" className={transparentBtn} onClick={this.openModal}>
            <img src="/public/assests/icons/add_book.svg" alt="Add book" className={menuImage} />
          </button>
        </header>
        <ModalWrapper showModal={showModal}>
          <AddUpdateBook
            closeModal={this.closeModal}
            addBook={this.addBook}
            updateBook={this.updateBook}
            listOfBooks={listOfBooks}
          />
        </ModalWrapper>
        { bookListView }
      </main>
    );
  }
}
