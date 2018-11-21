import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayBooks from './tableContents/displayBooks';
import DisplayNoBookEmoji from './tableContents/displayNoBookEmoji';

export default class DynamicTBody extends Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  deleteBook(index) {
    const { books } = this.props;
    books.deleteBook(index);
  }

  removeGenre(bookId) {
    const { books } = this.props;
    books.removeGenre(bookId);
  }

  editBook(bookId) {
    const { books } = this.props;
    books.editBook(bookId);
  }

  render() {
    const { books } = this.props;
    return (
      books.books.length
        ? (
          <DisplayBooks
            books={books.books}
            deleteBook={this.deleteBook}
            removeGenre={this.removeGenre}
            editBook={this.editBook}
          />)
        : <DisplayNoBookEmoji />
    );
  }
}

DynamicTBody.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};
