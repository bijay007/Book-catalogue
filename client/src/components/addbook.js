import React, {PureComponent} from "react";
import { css } from "emotion";

const visible= css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)'
})

const hidden = css({
  display:'none'
})

const modal_body = css({
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
  fontSize: '15px'
})

const book_info = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
})

const close_btn = css({
  border: '1px solid green',
  fontSize: '18px bold',
  margin: '5px auto',
  padding: '5px'
})

export default class AddBook extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      genre: '',
      valid: false
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModalAndSaveBook = this.closeModalAndSaveBook.bind(this);
  }

  validateForm() {
    this.state.name !== ''
      ? this.setState({valid: true})
      : this.setState({valid: false})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value}, () => {
      this.validateForm()
    })
  }

  closeModalAndSaveBook(event) {
    const {name, genre, price, valid} = this.state;
    event.preventDefault();
    this.validateForm();
    if (valid) {
      this.props.closeModal();
      this.props.addBook({
        name: name,
        genre: genre,
        price: price
      });
      this.setState({name: '', genre: '', price: '', valid: false})
    }
  }

  render() {
    return (
      <div className={this.props.showModal ? visible : hidden}>
        <div className={modal_body}>
          <form className={book_info} onSubmit={this.closeModalAndSaveBook}>
            <label for="name">Name</label>
            <input type="text" value={this.state.name} name="name" placeholder="Name of the book" onChange={this.handleChange} />
            <label for="genre">Genre</label>
            <input type="genre" value={this.state.genre} name="genre" placeholder="Genre of the book" onChange={this.handleChange} />
            <label for="price">Price</label>
            <input type="number" value={this.state.price} name="price" placeholder="Price in euros" onChange={this.handleChange} />
            <button type="submit" disabled={!this.state.valid} className={close_btn}>Save</button>
          </form>
        </div>
      </div>
    )
  }

}
