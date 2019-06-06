import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dropDownBody } from '@common/styles';
import { connect } from 'react-redux';
import { showHideBooks } from '@redux/actions/bookActions';
import { extractObjContainingValue, extractUniqKeys, getArrayDifference } from '@common/helpers';

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
    const { listOfBooks, _showHideBooks } = this.props;
    const booksToHide = getArrayDifference(listOfBooks, booksToShow);
    const finalBooklist = booksToHide.map(item => Object.assign({}, item, { show: false }));
    _showHideBooks(finalBooklist);
  }

  selectResult(e) {
    const { listOfBooks } = this.props;
    const selectedGenre = e.target.value;
    const booksWithSelectedGenre = extractObjContainingValue(listOfBooks, 'genre', selectedGenre);
    if (selectedGenre === 'All Genre') {
      this.clearBookFilter();
    } else {
      this.addBookFilter(booksWithSelectedGenre);
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
  _showHideBooks: books => dispatch(showHideBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);

DropDownMenu.propTypes = {
  listOfBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  _showHideBooks: PropTypes.func.isRequired,
};
