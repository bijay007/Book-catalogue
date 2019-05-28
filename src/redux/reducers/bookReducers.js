import { removeObjFromArr } from '../../common/helpers';

const initialState = {
  listOfBooks: [],
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        listOfBooks: [...state.listOfBooks, action.book],
      };
    case 'EDIT_BOOK': {
      const listOfBooks = Array.from(state.listOfBooks);
      listOfBooks[action.index].index = action.index;
      return { listOfBooks };
    }
    case 'UPDATE_BOOK': {
      const listOfBooks = [...state.listOfBooks];
      const filteredList = removeObjFromArr(listOfBooks, 'index');
      return {
        listOfBooks: [...filteredList, action.book],
      };
    }
    case 'DELETE_BOOK': {
      const listOfBooks = [...state.listOfBooks];
      listOfBooks.splice(action.index, 1);
      return { listOfBooks };
    }
    case 'DELETE_GENRE': {
      const listOfBooks = [...state.listOfBooks];
      listOfBooks[action.index].genre = '';
      return { listOfBooks };
    }
    default:
      return state;
  }
};

export default bookReducers;
