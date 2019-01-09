import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DisplayBooks from './tableContents/displayBooks';
import DisplayNoBookEmoji from './tableContents/displayNoBookEmoji';

export default class DynamicTBody extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      oldData: '',
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  componentWillMount() {
    const showSpinner = () => (
      <tr>
        <td>
          <img style={{ width: 'auto', height: '32px' }} alt="spinner" src="../../client/public/assests/icons/spinner.svg" />
        </td>
      </tr>
    );
    this.setState({ oldData: showSpinner() });
  }

  componentDidMount() {
    const showBooksFetched = () => this.setState({ oldData: <DisplayNoBookEmoji /> });
    return setTimeout(showBooksFetched, 2500);
  }

  deleteBook(index) {
    const { books } = this.props;
    books.deleteBook(index);
  }

  removeGenre(index) {
    const { books } = this.props;
    books.removeGenre(index);
  }

  editBook(index) {
    const { books } = this.props;
    books.editBook(index);
  }

  render() {
    const { books } = this.props;
    const { oldData } = this.state;
    return (
      books.books.length
        ? (
          <DisplayBooks
            books={books.books}
            deleteBook={this.deleteBook}
            removeGenre={this.removeGenre}
            editBook={this.editBook}
          />
        )
        : oldData
    );
  }
}

DynamicTBody.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
