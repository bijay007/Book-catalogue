import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const visible = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
});

const hidden = css({
  display: 'none',
});

const modalBody = css({
  position: 'fixed',
  background: '#fff',
  width: '30%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  fontSize: '15px',
});

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

export default class AddBook extends PureComponent {
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
    const {
      name, genre, price, valid,
    } = this.state;
    const { showModal } = this.props;
    return (
      <div className={showModal ? visible : hidden}>
        <div className={modalBody}>
          <form className={bookInfo} onSubmit={this.closeModalAndSaveBook}>
            <span>Name</span>
            <input type="text" value={name} name="name" placeholder="Name of the book" onChange={this.handleChange} />
            <span>Genre</span>
            <input type="genre" value={genre} name="genre" placeholder="Genre of the book" onChange={this.handleChange} />
            <span>Price</span>
            <input type="number" value={price} name="price" min="0" placeholder="Price in euros" onChange={this.handleChange} />
            <button type="submit" disabled={!valid} className={closeBtn}>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

AddBook.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  addBook: PropTypes.func,
};

AddBook.defaultProps = {
  showModal: true,
  closeModal: () => {},
  addBook: () => {},
};
