const initialState = {
  genreSelected: '',
};

const tableReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TABLE':
      return { genreSelected: action.genreSelected };
    default:
      return state;
  }
};

export default tableReducers;
