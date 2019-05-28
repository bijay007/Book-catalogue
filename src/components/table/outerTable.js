import React from 'react';
import InnerTable from './innerTable';
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
        <InnerTable books={props} />
      </tbody>
    }
  </table>
);

export default OuterTable;
