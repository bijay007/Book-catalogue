import React, { PureComponent } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import AddBookForm from './form/addBookForm';
import EditBookForm from './form/editBookForm';

const bookInfo = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
});

const closeBtn = css({
  border: '1px solid green',
  fontSize: '18px bold',
  margin: '5px auto',
  padding: '5px',
});

export default class AddUpdateBook extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      genre: '',
      valid: false,
      edition: false,
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModalAndSaveBook = this.closeModalAndSaveBook.bind(this);
  }

  validateForm() {
    const { name } = this.state;
    return name !== '' ? this.setState({ valid: true }) : this.setState({ valid: false });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.validateForm();
    });
  }

  closeModalAndSaveBook(event) {
    const {
      name, genre, price, valid, edition,
    } = this.state;
    const { closeModal, addBook, updateBook } = this.props;
    event.preventDefault();
    this.validateForm();
    if (valid) {
      closeModal();
      if (edition) {
        updateBook({
          name, genre, price,
        });
      } else {
        addBook({
          name, genre, price,
        });
      }
      this.setState({
        name: '', genre: '', price: '', valid: false, edition: false,
      });
    }
  }

  render() {
    const { listOfBooks } = this.props;
    const bookToEdit = {};
    const bookExistsPromise = new Promise((resolve) => {
      listOfBooks.forEach((book) => {
        if (book.index) {
          Object.assign(bookToEdit, book);
          resolve(bookToEdit);
        }
      });
    });

    return bookExistsPromise.then((result) => {
      if (result.name !== undefined) {
        return (
          <AddBookForm
            bookInfo={bookInfo}
            closeBtn={closeBtn}
            closeModalAndSaveBook={this.closeModalAndSaveBook}
            handleChange={this.handleChange}
            parentState={this.state}
          />
        );
      }
      return (
        <EditBookForm
          bookInfo={bookInfo}
          closeBtn={closeBtn}
          closeModalAndSaveBook={this.closeModalAndSaveBook}
          handleChange={this.handleChange}
          parentState={this.state}
          bookToEdit={bookToEdit}
        />
      );
    });
  }
}

AddUpdateBook.propTypes = {
  closeModal: PropTypes.instanceOf(Function).isRequired,
  addBook: PropTypes.instanceOf(Function).isRequired,
  updateBook: PropTypes.instanceOf(Function).isRequired,
  listOfBooks: PropTypes.instanceOf(Array).isRequired,
};
