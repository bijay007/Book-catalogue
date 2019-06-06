import React from 'react';
import PropTypes from 'prop-types';
import { dropDownBody } from '@common/styles';
import { connect } from 'react-redux';
import { showHideBooks } from '@redux/actions/bookActions';
import updateTable from '@redux/actions/tableActions';
import { extractObjContainingValue, extractUniqKeys } from '@common/helpers';

const DropDownMenu = (props) => {
  const { listOfBooks, _showHideBooks, _updateTable } = props;
  const listOfGenre = extractUniqKeys(listOfBooks, 'genre');

  const clearBookFilter = () => {
    const showAllBooks = listOfBooks.map(book => Object.assign({}, book, { show: true }));
    _showHideBooks(showAllBooks);
  };

  const addBookFilter = (booksToShow) => {
    const finalBooklist = booksToShow.map(item => Object.assign({}, item, { show: true }));
    _showHideBooks(finalBooklist);
  };

  const selectResult = (e) => {
    const selectedGenre = e.target.value;
    const booksWithSelectedGenre = extractObjContainingValue(listOfBooks, 'genre', selectedGenre);
    if (selectedGenre === 'All Genre') {
      clearBookFilter();
    } else {
      addBookFilter(booksWithSelectedGenre);
      _updateTable(selectedGenre);
    }
  };

  if (listOfGenre.length) {
    return (
      <select className={dropDownBody} onChange={selectResult}>
        <option value="All Genres">All Genres</option>
        {
          listOfGenre.map(
            (genre, index) => <option key={index.toString()} value={genre}>{genre}</option>,
          )
        }
      </select>
    );
  }
  return null;
};

const mapStateToProps = state => ({ listOfBooks: state.bookListState.listOfBooks });
const mapDispatchToProps = dispatch => ({
  _updateTable: genre => dispatch(updateTable(genre)),
  _showHideBooks: books => dispatch(showHideBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);

DropDownMenu.propTypes = {
  listOfBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  _showHideBooks: PropTypes.func.isRequired,
  _updateTable: PropTypes.func.isRequired,
};
