const modalReducers = (state = { showModal: false }, action) => {
  switch (action.type) {
    case 'OPEN_MODAL': // fall-through
    case 'CLOSE_MODAL': {
      const newState = Object.assign({}, state, { showModal: action.showModal });
      return newState;
    }
    default:
      return state;
  }
};

export default modalReducers;
