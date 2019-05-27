import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formBody } from '@styles/styles';

class AddBookForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      price: '',
      valid: false,
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModalAndSaveBook = this.closeModalAndSaveBook.bind(this);
  }

  validateForm() {
    const { name } = this.state;
    return name === ''
      ? this.setState({ valid: false })
      : this.setState({ valid: true });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.validateForm(); // validation should be cb so user can't save immediately after changes
    });
  }

  closeModalAndSaveBook(event) {
    const {
      name, genre, price, valid,
    } = this.state;
    const { closeFormModal, addBook } = this.props;
    event.preventDefault();
    if (valid) {
      addBook({
        name, genre, price,
      });
      this.setState({
        name: '', genre: '', price: '', valid: false,
      });
      closeFormModal();
    }
  }

  render() {
    const {
      name, genre, price, valid,
    } = this.state;
    return (
      <form className={formBody.bookInfo} onSubmit={this.closeModalAndSaveBook}>
        <span>Name</span>
        <input type="text" value={name} name="name" placeholder="Name of the book" onChange={this.handleChange} />
        <span>Genre</span>
        <input type="genre" value={genre} name="genre" placeholder="Genre of the book" onChange={this.handleChange} />
        <span>Price</span>
        <input type="number" value={price} name="price" min="0" placeholder="Price in euros" onChange={this.handleChange} />
        <button type="submit" disabled={!valid} className={formBody.closeBtn}>Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ showModal: state.modalState.showModal });

export default connect(mapStateToProps)(AddBookForm);

AddBookForm.propTypes = {
  closeFormModal: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
};
