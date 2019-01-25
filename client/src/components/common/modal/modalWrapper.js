import React from 'react';
import { modalContainer, modalBody } from '../../../common/styles';

const ModalWrapper = (props) => {
  const itemPassed = props;
  if (itemPassed.showModal) {
    return (
      <div className={modalContainer}>
        <div className={modalBody}>
          { itemPassed.children }
        </div>
      </div>
    );
  }
  return null;
};

export default ModalWrapper;
