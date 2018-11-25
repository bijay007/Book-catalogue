import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

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
export default class EditBookForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      price: '',
      valid: true,
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModalAndUpdateBook = this.closeModalAndUpdateBook.bind(this);
  }

  componentWillMount() {
    const { bookToEdit } = this.props;
    this.setState({
      name: bookToEdit.name,
      price: bookToEdit.price,
      genre: bookToEdit.genre,
    });
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

  closeModalAndUpdateBook(event) {
    const {
      name, genre, price, valid,
    } = this.state;
    const { closeModal, updateBook } = this.props;
    event.preventDefault();
    this.validateForm();
    if (valid) {
      closeModal();
      updateBook({
        name, genre, price,
      });
    }
    this.setState({
      name: '', genre: '', price: '',
    });
  }

  render() {
    const {
      name, genre, price, valid,
    } = this.state;
    return (
      <form className={bookInfo} onSubmit={this.closeModalAndUpdateBook}>
        <span>New Name</span>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <span>New Genre</span>
        <input type="genre" name="genre" value={genre} onChange={this.handleChange} />
        <span>New Price</span>
        <input type="number" name="price" value={price} min="0" onChange={this.handleChange} />
        <button type="submit" disabled={!valid} className={closeBtn}>Update</button>
      </form>
    );
  }
}

EditBookForm.propTypes = {
  bookToEdit: PropTypes.instanceOf(Object).isRequired,
  closeModal: PropTypes.instanceOf(Function).isRequired,
  updateBook: PropTypes.instanceOf(Function).isRequired,
};
