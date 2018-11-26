import React from 'react';
import { css } from 'emotion';

const modalBody = css({
  position: 'fixed',
  background: '#fff',
  width: '30%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  fontSize: '15px',
  boxShadow: '0 0 8px #ff8989',
});

const MainModal = (props) => {
  const itemPassed = props;
  return (
    <div className={modalBody}>
      { itemPassed.children }
    </div>
  );
};

export default MainModal;
