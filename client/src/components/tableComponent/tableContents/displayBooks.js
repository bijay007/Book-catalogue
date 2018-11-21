import React from 'react';
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
  padding: '5px',
  border: '1px solid #000',
});
const actions = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

const DisplayBooks = (props) => {
  const { books, deleteBook } = props;
  return books.map((book, index) => (
    <tr>
      <td className={cellPadding}>{book.name}</td>
      <td className={cellPadding}>{book.genre}</td>
      <td className={cellPadding}>{book.price}</td>
      <td className={cellPadding} onClick={() => deleteBook(index)} role="presentation">
        <div className={actions}>
          <img className={edition} src="/client/public/assests/icons/edit_book.svg" alt="edit book" />
          <img className={edition} src="/client/public/assests/icons/delete_book.svg" alt="delete book" />
          <img className={delGenre} src="/client/public/assests/icons/delete_genre.png" alt="delete book" />
        </div>
      </td>
    </tr>
  ));
};

export default DisplayBooks;
