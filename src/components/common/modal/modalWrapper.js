import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modalContainer, modalBody } from '@common/styles';

const ModalWrapper = (props) => {
  const { showModal, children } = props;
  if (showModal) {
    return (
      <div className={modalContainer}>
        <div className={modalBody}>
          { children }
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => ({ showModal: state.modalState.showModal });

export default connect(mapStateToProps)(ModalWrapper);


ModalWrapper.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
