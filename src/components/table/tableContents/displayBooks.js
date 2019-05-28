import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { innerTBody } from '@styles/styles';

class DisplayBooks extends Component {
  render() {
    const {
      deleteBook, removeGenre, editBook,
    } = this.props;
    const { books } = this.props;
    return books.map((book, index) => (
      <tr key={(book + index).toString()}>
        <td className={innerTBody.cellPadding}>{book.name}</td>
        <td className={innerTBody.cellPadding}>{book.genre}</td>
        <td className={innerTBody.cellPadding}>{book.price}</td>
        <td className={innerTBody.cellPadding}>
          <div className={innerTBody.actions}>
            <img className={innerTBody.edition} onClick={() => editBook(index)} role="presentation" src="/public/assests/icons/edit_book.svg" alt="edit book" />
            <img className={innerTBody.edition} onClick={() => deleteBook(index)} role="presentation" src="/public/assests/icons/delete_book.svg" alt="delete book" />
            <img className={innerTBody.delGenre} onClick={() => removeGenre(index)} role="presentation" src="/public/assests/icons/delete_genre.png" alt="delete book" />
          </div>
        </td>
      </tr>
    ));
  }
}

const mapStateToProps = state => ({ books: state.bookListState.listOfBooks });

export default connect(mapStateToProps)(DisplayBooks);

DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  removeGenre: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
};
