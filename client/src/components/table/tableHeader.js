import React from 'react';
import DynamicTBody from './tableBody';
import { outerTableBody } from '../../common/styles';

const TableHeaders = props => (
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
        <DynamicTBody books={props} />
      </tbody>
    }
  </table>
);

export default TableHeaders;
