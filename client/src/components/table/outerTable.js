import React from 'react';
import DynamicTBody from './innerTable';
import { outerTableBody } from '../../common/styles';

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
        <DynamicTBody books={props} />
      </tbody>
    }
  </table>
);

export default OuterTable;
