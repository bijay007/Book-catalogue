import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { extractObjContainingValue } from '../../helpers/common';

const dropDown = css({
  height: '25px',
  width: '170px',
  marginLeft: '200px',
  marginTop: '5px',
  outline: 'none',
  borderColor: '#9ecaed',
  boxShadow: '0 0 10px #9ecaed',
});

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
    const allGenres = listOfBooks.map(book => book.genre).filter(elem => !!elem);
    this.setState({ listOfGenre: [...allGenres] });
  }

  selectResult(e) {
    const { listOfBooks, showFilteredBooks, clearBookFilter } = this.props;
    const selectedGenre = e.target.value;
    const booksWithSelectedGenre = extractObjContainingValue(listOfBooks, 'genre', selectedGenre);
    return (selectedGenre === 'All Genre')
      ? clearBookFilter()
      : showFilteredBooks(booksWithSelectedGenre);
  }

  render() {
    const { listOfGenre } = this.state;
    return (
      <select className={dropDown} onChange={this.selectResult}>
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
  listOfBooks: PropTypes.instanceOf(Array).isRequired,
  showFilteredBooks: PropTypes.instanceOf(Function).isRequired,
  clearBookFilter: PropTypes.instanceOf(Function).isRequired,
};
