import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from './redux/actions/modalActions';
import { appContainer, appMenu, menuImage, transparentBtn } from '@styles/styles';
import OuterTable from './components/table/outerTable';
import AddUpdateBook from './components/form/selectAddEditForm';
import { removeObjFromArr } from './common/helpers';
import DropDownMenu from './components/dropdown/mainDropdown';
import ModalWrapper from './components/common/modal/modalWrapper';

class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      listOfBooks: [],
      filteredBooks: [],
    };
    this.openFormModal = this.openFormModal.bind(this);
    this.showAllBooks = this.showAllBooks.bind(this);
    this.showFilteredBooks = this.showFilteredBooks.bind(this);
    this.clearBookFilter = this.clearBookFilter.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.editBook = this.editBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  openFormModal() {
    this.props.openModal()
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
    this.setState({ listOfBooks: [...listOfBooks] }, this.openFormModal());
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
    return (
      <OuterTable
        deleteBook={this.deleteBook}
        removeGenre={this.removeGenre}
        editBook={this.editBook}
      />
    );
  }

  render() {
    const { listOfBooks } = this.state;
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
          <button type="button" className={transparentBtn} onClick={this.openFormModal}>
            <img src="/public/assests/icons/add_book.svg" alt="Add book" className={menuImage} />
          </button>
        </header>
        <ModalWrapper>
          <AddUpdateBook
            updateBook={this.updateBook}
            listOfBooks={listOfBooks}
          />
        </ModalWrapper>
        { bookListView }
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookListState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
