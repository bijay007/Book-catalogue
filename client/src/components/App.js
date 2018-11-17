import React, { Component } from 'react';
import { css } from 'emotion';
import AddBook from './addbook';
import BookTable from './bookTable';

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

export default class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      listOfBooks: [],
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addBook = this.addBook.bind(this);
    this.displayBooks = this.displayBooks.bind(this);
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

  displayBooks() {
    const { listOfBooks } = this.state;
    return (
      <BookTable books={listOfBooks} />
    );
  }

  render() {
    const { showModal } = this.state;
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
        <AddBook showModal={showModal} closeModal={this.closeModal} addBook={this.addBook} />
        <div className="contents">
          { showBooks }
        </div>
      </div>
    );
  }
}
