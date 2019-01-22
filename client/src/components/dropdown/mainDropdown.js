import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { extractObjContainingValue, extractUniqKeys } from '../../common/helpers';
import { dropDownBody } from '../../common/styles';

export default class DropDownMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listOfGenre: [],
    };
    this.selectResult = this.selectResult.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { listOfBooks } = nextProps;
    const extractedGenreArr = extractUniqKeys(listOfBooks, 'genre');
    this.setState({ listOfGenre: [...extractedGenreArr] });
  }

  selectResult(e) {
    const { listOfBooks, showFilteredBooks, clearBookFilter } = this.props;
    const selectedGenre = e.target.value;
    const booksWithSelectedGenre = extractObjContainingValue(listOfBooks, 'genre', selectedGenre);
    if (selectedGenre === 'All Genre') {
      clearBookFilter();
    } else {
      showFilteredBooks(booksWithSelectedGenre);
    }
  }

  render() {
    const { listOfGenre } = this.state;
    if (!listOfGenre.length) {
      return null;
    }
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
}

DropDownMenu.propTypes = {
  listOfBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  showFilteredBooks: PropTypes.func.isRequired,
  clearBookFilter: PropTypes.func.isRequired,
};
