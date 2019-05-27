import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formBody } from '@styles/styles';

class EditBookForm extends PureComponent {
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
    const { closeFormModal, updateBook } = this.props;
    event.preventDefault();
    this.validateForm();
    if (valid) {
      closeFormModal();
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
      <form className={formBody.bookInfo} onSubmit={this.closeModalAndUpdateBook}>
        <span>New Name</span>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <span>New Genre</span>
        <input type="genre" name="genre" value={genre} onChange={this.handleChange} />
        <span>New Price</span>
        <input type="number" name="price" value={price} min="0" onChange={this.handleChange} />
        <button type="submit" disabled={!valid} className={formBody.closeBtn}>Update</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ showModal: state.modalState.showModal });

export default connect(mapStateToProps)(EditBookForm);

EditBookForm.propTypes = {
  bookToEdit: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  closeFormModal: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
};
