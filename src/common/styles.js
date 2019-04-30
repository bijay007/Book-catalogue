/** Contains common and global styles for reusuable components */

import { css } from 'emotion';

const appContainer = css({
  display: 'flex',
  flexDirection: 'column',
  width: '550px',
  margin: '50px auto',
  border: '2px solid blue',
  boxShadow: '1px 1px 1px #ff3300',
});

const appMenu = css({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
});

const menuImage = css({
  padding: '5px',
  maxWidth: '40px',
});

const modalContainer = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
});

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
  fontSize: '17px',
  boxShadow: '0 0 8px #ff8989',
});

const formBody = {
  bookInfo: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    '& span': {
      marginBottom: '2px',
    },
    '& input': {
      marginBottom: '4px',
      padding: '5px',
      height: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#9ecaed',
      boxShadow: '0 0 10px #9ecaed',
    },
  }),

  closeBtn: css({
    border: '1px solid green',
    margin: '20px auto 5px auto',
    width: '100px',
    padding: '8px',
    fontWeight: 'bold',
  }),
};

const dropDownBody = css({
  zindex: 1000,
  height: '25px',
  width: '170px',
  marginLeft: '200px',
  marginTop: '5px',
  outline: 'none',
  borderColor: '#9ecaed',
  boxShadow: '0 0 10px #9ecaed',
});

const outerTableBody = css({
  width: '100%',
  borderTop: '3px solid #000',
  marginTop: '20px',
  borderCollapse: 'collapse',
  textAlign: 'center',
  '& .head': {
    borderBottom: '2px solid #000',
  },
  '& th': {
    padding: '7px',
    border: '1px solid #000',
    textShadow: '0.2px 0.2px 0.1px #4c4c4c',
    fontSize: '16px',
  },
  '& th:last-child': {
    borderRight: '0px',
  },
});

const innerTBody = {
  edition: css({
    width: '18px',
    height: 'auto',
    marginLeft: '-5px',
  }),
  delGenre: css({
    width: '45px',
    height: 'auto',
  }),
  cellPadding: css({
    padding: '6px',
    border: '1px solid #000',
  }),
  actions: css({
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    justifyContent: 'space-evenly',
  }),
};

const transparentBtn = css({
  border: 'none',
  background: 'none',
});


export {
  appContainer,
  appMenu,
  menuImage,
  modalContainer,
  modalBody,
  formBody,
  dropDownBody,
  outerTableBody,
  innerTBody,
  transparentBtn,
};
