import React from 'react';
import { modalBody } from '../../common/styles';

const OuterModal = (props) => {
  const itemPassed = props;
  return (
    <div className={modalBody}>
      { itemPassed.children }
    </div>
  );
};

export default OuterModal;
