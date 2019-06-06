import { findAndReplaceObj, getArrayUnion } from '@common/helpers';

const initialState = {
  listOfBooks: [],
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return { listOfBooks: [...state.listOfBooks, action.book] };
    case 'EDIT_BOOK': {
      // single level object cloning as we will be mutating objects inside the array
      const listOfBooks = state.listOfBooks.map(book => Object.assign({}, book));
      listOfBooks[action.index].index = action.index;
      return { listOfBooks };
    }
    case 'UPDATE_BOOK': {
      const originalList = state.listOfBooks.map(book => Object.assign({}, book));
      const listOfBooks = findAndReplaceObj(originalList, 'index', action.book);
      return { listOfBooks };
    }
    case 'SHOW_HIDE_BOOKS': {
      let oldBooks;
      const selectedBooks = action.books.map(book => Object.assign({}, book));
      if (selectedBooks.length) {
        oldBooks = state.listOfBooks.map(book => Object.assign({}, book, { show: false }));
      } else {
        oldBooks = state.listOfBooks.map(book => Object.assign({}, book, { show: true }));
      }
      // Another approach is get the difference between original array and passed array (using
      // helper.getArrayDifference()) and set the `show` prop of the difference array to false.
      const listOfBooks = getArrayUnion(oldBooks, selectedBooks);
      return { listOfBooks };
    }
    case 'DELETE_BOOK': {
      const listOfBooks = [...state.listOfBooks];
      listOfBooks.splice(action.index, 1);
      return { listOfBooks };
    }
    case 'REMOVE_GENRE': {
      const listOfBooks = state.listOfBooks.map(book => Object.assign({}, book));
      listOfBooks[action.index].genre = '';
      return { listOfBooks };
    }
    default:
      return state;
  }
};

export default bookReducers;
