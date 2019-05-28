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
  }

  componentDidMount() {
    const waitFakeBookFetch = () => this.setState({ oldData: <DisplayNoBookEmoji /> });
    return setTimeout(waitFakeBookFetch, 2500);
  }

  render() {
    const { oldData } = this.state;
    return (
      this.props.books.length
        ? (
          <DisplayBooks />
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
