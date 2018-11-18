import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const pencil = css({
  width: '15px',
  height: 'auto',
});
const cellPadding = css({
  padding: '5px',
});

export default class DynamicTBody extends Component {
  constructor(props) {
    super(props);
    this.editDelete = this.editDelete.bind(this);
  }

  editDelete(book, index) {
    const { books } = this.props;
    books.editBook(book, index);
  }

  render() {
    const { books } = this.props;
    return (
      books.books.length
        ? books.books.map((book, index) => (
          <tr id={index}>
            <td className={cellPadding}>{book.name}</td>
            <td className={cellPadding}>{book.genre}</td>
            <td className={cellPadding}>{book.price}</td>
            <td className={cellPadding} onClick={() => this.editDelete(book, index)} role="presentation"><img className={pencil} src="/client/public/assests/icons/edit_book.svg" alt="edit and/or delete" /></td>
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
