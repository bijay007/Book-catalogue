import React from 'react';
import { css } from 'emotion';
import DynamicTBody from './tableBody';

const mainTable = css({
  width: '100%',
  borderTop: '3px solid #000',
  marginTop: '20px',
  borderCollapse: 'collapse',
  textAlign: 'center',
  '& .head': {
    borderBottom: '2px solid #000',
  },
  '& th': {
    padding: '3px',
    border: '1px solid #000',
  },
});

const BookTable = props => (
  <table className={mainTable}>
    <thead className="head">
      <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    {
      <tbody>
        <DynamicTBody books={props} />
      </tbody>
    }
  </table>
);

export default BookTable;
