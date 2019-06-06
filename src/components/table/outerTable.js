import React from 'react';
import InnerTable from './innerTable';
import { outerTableBody } from '@common/styles';

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
        <InnerTable />
      </tbody>
    }
  </table>
);

export default OuterTable;
