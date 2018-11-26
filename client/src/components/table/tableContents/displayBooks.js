import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const edition = css({
  width: '18px',
  height: 'auto',
  marginLeft: '-5px',
});
const delGenre = css({
  width: '45px',
  height: 'auto',
});
const cellPadding = css({
  padding: '6px',
  border: '1px solid #000',
});
const actions = css({
  display: 'flex',
  alignItems: 'center',
  marginTop: '4px',
  justifyContent: 'space-evenly',
});

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
        <td className={cellPadding}>{book.name}</td>
        <td className={cellPadding}>{book.genre}</td>
        <td className={cellPadding}>{book.price}</td>
        <td className={cellPadding}>
          <div className={actions}>
            <img className={edition} onClick={() => editBook(index)} role="presentation" src="/client/public/assests/icons/edit_book.svg" alt="edit book" />
            <img className={edition} onClick={() => deleteBook(index)} role="presentation" src="/client/public/assests/icons/delete_book.svg" alt="delete book" />
            <img className={delGenre} onClick={() => removeGenre(index)} role="presentation" src="/client/public/assests/icons/delete_genre.png" alt="delete book" />
          </div>
        </td>
      </tr>
    ));
  }
}

DisplayBooks.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.instanceOf(Function).isRequired,
  removeGenre: PropTypes.instanceOf(Function).isRequired,
  editBook: PropTypes.instanceOf(Function).isRequired,
};
