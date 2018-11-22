import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import MainModal from './modal/mainModal';
import AddBookForm from './form/addBookForm';

const visible = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
});

const hidden = css({
  display: 'none',
});

const AddBook = (props) => {
  const { showModal, closeModal, addBook } = props;
  return (
    <div className={showModal ? visible : hidden}>
      <MainModal>
        <AddBookForm closeModal={closeModal} addBook={addBook} />
      </MainModal>
    </div>
  );
};

export default AddBook;

AddBook.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
};
