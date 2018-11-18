import React from 'react';
import { css } from 'emotion';
import DynamicTBody from './tableBody';

const mainTable = css({
  width: '100%',
  borderTop: '3px solid #000',
  marginTop: '20px',
});
const head = css({
  border: '2px solid #0f0',
});

const BookTable = props => (
  <table className={mainTable}>
    <tr className={head}>
      <th>Name</th>
      <th>Genre</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
    {
      <DynamicTBody books={props} />
    }
  </table>
);

export default BookTable;
