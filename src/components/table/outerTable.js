import React from 'react';
import TableContents from './innerTable';
import { outerTableBody } from '@styles/styles';

const OuterTable = props => (
  <table className={outerTableBody}>
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
        <TableContents books={props} />
      </tbody>
    }
  </table>
);

export default OuterTable;
