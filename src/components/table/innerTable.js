import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayBooks from './tableContents/displayBooks';
import DisplayNoBookEmoji from './tableContents/displayNoBookEmoji';
import Spinner from '../common/spinner/mainSpinner';

class InnerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldData: <Spinner />,
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  componentDidMount() {
    const waitFakeBookFetch = () => this.setState({ oldData: <DisplayNoBookEmoji /> });
    return setTimeout(waitFakeBookFetch, 2500);
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
      books.length
        ? (
          <DisplayBooks
            books={books}
            deleteBook={this.deleteBook}
            removeGenre={this.removeGenre}
            editBook={this.editBook}
          />
        )
        : oldData
    );
  }
}

const mapStateToProps = state => ({ books: state.bookListState.listOfBooks });

export default connect(mapStateToProps)(InnerTable);

InnerTable.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
