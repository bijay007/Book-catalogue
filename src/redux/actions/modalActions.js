const openModal = () => ({
  type: 'OPEN_MODAL',
  showModal: true,
});

const closeModal = () => ({
  type: 'CLOSE_MODAL',
  showModal: false,
});

export {
  openModal,
  closeModal,
};
