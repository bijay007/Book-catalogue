import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { innerTBody } from '@styles/styles';
import { editBook, deleteBook, removeGenre } from '../../../redux/actions/bookActions';

class DisplayBooks extends Component {
  render() {
    const {
      _deleteBook, _removeGenre, _editBook, _listOfBooks,
    } = this.props;
    return _listOfBooks.map((book, index) => (
      <tr key={(book + index).toString()}>
        <td className={innerTBody.cellPadding}>{book.name}</td>
        <td className={innerTBody.cellPadding}>{book.genre}</td>
        <td className={innerTBody.cellPadding}>{book.price}</td>
        <td className={innerTBody.cellPadding}>
          <div className={innerTBody.actions}>
            <img className={innerTBody.edition} onClick={() => _editBook(index)} role="presentation" src="/public/assests/icons/edit_book.svg" alt="edit book" />
            <img className={innerTBody.edition} onClick={() => _deleteBook(index)} role="presentation" src="/public/assests/icons/delete_book.svg" alt="delete book" />
            <img className={innerTBody.delGenre} onClick={() => _removeGenre(index)} role="presentation" src="/public/assests/icons/delete_genre.png" alt="delete book" />
          </div>
        </td>
      </tr>
    ));
  }
}

const mapStateToProps = state => ({ _listOfBooks: state.bookListState.listOfBooks });
const mapDispatchToProps = dispatch => ({
  _editBook: index => dispatch(editBook(index)),
  _deleteBook: index => dispatch(deleteBook(index)),
  _removeGenre: index => dispatch(removeGenre(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBooks);

DisplayBooks.propTypes = {
  _listOfBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  _deleteBook: PropTypes.func.isRequired,
  _removeGenre: PropTypes.func.isRequired,
  _editBook: PropTypes.func.isRequired,
};
