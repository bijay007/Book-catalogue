import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const delBook = css({
  width: '20px',
  height: 'auto',
});
const cellPadding = css({
  padding: '5px',
});

export default class DynamicTBody extends Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook(index) {
    const { books } = this.props;
    books.deleteBook(index);
  }

  render() {
    const { books } = this.props;
    return (
      books.books.length
        ? books.books.map((book, index) => (
          <tr>
            <td className={cellPadding}>{book.name}</td>
            <td className={cellPadding}>{book.genre}</td>
            <td className={cellPadding}>{book.price}</td>
            <td className={cellPadding} onClick={() => this.deleteBook(index)} role="presentation"><img className={delBook} src="/client/public/assests/icons/delete_book.svg" alt="delete book" /></td>
          </tr>
        ))
        : (
          <tr>
            <td className={cellPadding}><span role="img" aria-label="sad-face">😔</span></td>
          </tr>
        )
    );
  }
}

DynamicTBody.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};
