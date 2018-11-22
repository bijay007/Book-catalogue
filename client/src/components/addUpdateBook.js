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
      name, genre, price, valid,
    } = this.state;
    const uniqueId = (name + price + genre + new Date()).toString();
    const { closeModal, addBook } = this.props;
    event.preventDefault();
    this.validateForm();
    if (valid) {
      closeModal();
      addBook({
        name, genre, price, uniqueId,
      });
      this.setState({
        name: '', genre: '', price: '', valid: false,
      });
    }
  }

  render() {
    const { bookToEdit } = this.props;
    return (
      Object.getOwnPropertyNames(bookToEdit).length === 0
        ? (
          <AddBookForm
            bookInfo={bookInfo}
            closeBtn={closeBtn}
            closeModalAndSaveBook={this.closeModalAndSaveBook}
            handleChange={this.handleChange}
            parentState={this.state}
          />)
        : (
          <EditBookForm
            bookInfo={bookInfo}
            closeBtn={closeBtn}
            closeModalAndSaveBook={this.closeModalAndSaveBook}
            handleChange={this.handleChange}
            parentState={this.state}
            bookToEdit={bookToEdit}
          />)
    );
  }
}

AddUpdateBook.propTypes = {
  closeModal: PropTypes.instanceOf(Function).isRequired,
  addBook: PropTypes.instanceOf(Function).isRequired,
  bookToEdit: PropTypes.instanceOf(Object).isRequired,
};
