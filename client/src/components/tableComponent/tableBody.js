import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const tableBody = css({
  textAlign: 'center',
});

const DynamicTBody = (props) => {
  const { books } = props;
  return (
    books.books.length
      ? books.books.map((book, index) => (
        <tr id={index} className={tableBody}>
          <td>{book.name}</td>
          <td>{book.genre}</td>
          <td>{book.price}</td>
          <td>Del/Edit</td>
        </tr>
      ))
      : <tr className={tableBody}><span role="img" aria-label="sad-face">😔</span></tr>
  );
};

DynamicTBody.propTypes = {
  books: PropTypes.instanceOf(Array),
};
DynamicTBody.defaultProps = {
  books: [],
};
export default DynamicTBody;
