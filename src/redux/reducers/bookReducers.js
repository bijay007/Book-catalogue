const bookReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state.bookList, action.book];
    default:
      return state;
  }
};

export default bookReducers;
