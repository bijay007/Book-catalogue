import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { extractObjContainingValue } from '../../helpers/common';

export default class DropDownMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listOfGenre: [],
      selected: 'Select',
    };
    this.selectResult = this.selectResult.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { listOfBooks } = nextProps;
    const allGenres = listOfBooks.map(book => book.genre).filter(elem => !!elem);
    this.setState({ listOfGenre: [...allGenres] });
  }

  selectResult(e) {
    const { listOfBooks, showFilteredBooks } = this.props;
    const selectedGenre = e.target.value;
    this.setState({ selected: selectedGenre });
    const booksWithSelectedGenre = extractObjContainingValue(listOfBooks, 'genre', selectedGenre);
    showFilteredBooks(booksWithSelectedGenre);
  }

  render() {
    const { listOfGenre, selected } = this.state;
    return (
      <select className={selected} onChange={this.selectResult}>
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
};
