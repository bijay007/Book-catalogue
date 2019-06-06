import { findAndReplaceObj, getArrayUnion } from '../../common/helpers';

const initialState = {
  listOfBooks: [],
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return { listOfBooks: [...state.listOfBooks, action.book] };
    case 'EDIT_BOOK': {
      // deep clone as we will be mutating objects inside the array
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
      const originalList = state.listOfBooks.map(book => Object.assign({}, book));
      const modifiedBooks = action.books.map(book => Object.assign({}, book));
      const listOfBooks = getArrayUnion(originalList, modifiedBooks);
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
