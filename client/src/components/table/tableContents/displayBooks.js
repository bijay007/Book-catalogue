import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { innerTBody } from '../../../common/styles';

export default class DisplayBooks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listOfBooks: props.books,
    };
  }

  componentWillReceiveProps(newProps) {
    const { books } = newProps;
    this.setState({ listOfBooks: [...books] });
  }

  render() {
    const {
      deleteBook, removeGenre, editBook,
    } = this.props;
    const { listOfBooks } = this.state;
    return listOfBooks.map((book, index) => (
      <tr key={(book + index).toString()}>
        <td className={innerTBody.cellPadding}>{book.name}</td>
        <td className={innerTBody.cellPadding}>{book.genre}</td>
        <td className={innerTBody.cellPadding}>{book.price}</td>
        <td className={innerTBody.cellPadding}>
          <div className={innerTBody.actions}>
            <img className={innerTBody.edition} onClick={() => editBook(index)} role="presentation" src="/client/public/assests/icons/edit_book.svg" alt="edit book" />
            <img className={innerTBody.edition} onClick={() => deleteBook(index)} role="presentation" src="/client/public/assests/icons/delete_book.svg" alt="delete book" />
            <img className={innerTBody.delGenre} onClick={() => removeGenre(index)} role="presentation" src="/client/public/assests/icons/delete_genre.png" alt="delete book" />
          </div>
        </td>
      </tr>
    ));
  }
}

DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  removeGenre: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
};
