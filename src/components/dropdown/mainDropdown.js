import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dropDownBody } from '@common/styles';
import { connect } from 'react-redux';
import { showHideBooks } from '@redux/actions/bookActions';
import updateTable from '@redux/actions/tableActions';
import { extractObjContainingValue, extractUniqKeys } from '@common/helpers';

class DropDownMenu extends Component {
  constructor() {
    super();
    this.state = {
      listOfGenre: [],
    };
    this.selectResult = this.selectResult.bind(this);
    this.clearBookFilter = this.clearBookFilter.bind(this);
    this.addBookFilter = this.addBookFilter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { listOfBooks } = nextProps;
    const extractedGenreArr = extractUniqKeys(listOfBooks, 'genre');
    this.setState({ listOfGenre: [...extractedGenreArr] });
  }

  clearBookFilter() {
    const { listOfBooks, _showHideBooks } = this.props;
    const showAllBooks = listOfBooks.map(book => Object.assign({}, book, { show: true }));
    _showHideBooks(showAllBooks);
  }

  addBookFilter(booksToShow) {
    const { _showHideBooks } = this.props;
    const finalBooklist = booksToShow.map(item => Object.assign({}, item, { show: true }));
    _showHideBooks(finalBooklist);
  }

  selectResult(e) {
    const { listOfBooks, _updateTable } = this.props;
    const selectedGenre = e.target.value;
    const booksWithSelectedGenre = extractObjContainingValue(listOfBooks, 'genre', selectedGenre);
    if (selectedGenre === 'All Genre') {
      this.clearBookFilter();
    } else {
      this.addBookFilter(booksWithSelectedGenre);
      _updateTable(selectedGenre);
    }
  }

  render() {
    const { listOfGenre } = this.state;
    if (listOfGenre.length) {
      return (
        <select className={dropDownBody} onChange={this.selectResult}>
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
  }
}

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
