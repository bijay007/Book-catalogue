import React from 'react';
import PropTypes from 'prop-types';

const BookTable = (props) => {
  const { books } = props;
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Genre</tr>
          <tr>Price</tr>
          <tr>Actions</tr>
        </thead>
        {
          books.map((book, index) => (
            <tbody id={index}>
              <tr>{book.name}</tr>
              <tr>{book.genre}</tr>
              <tr>{book.price}</tr>
              <tr>Delete/Edit</tr>
            </tbody>
          ))
        }
      </table>
    </React.Fragment>
  );
};

BookTable.propTypes = {
  books: PropTypes.instanceOf(Array),
};
BookTable.defaultProps = {
  books: [],
};
export default BookTable;
