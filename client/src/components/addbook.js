import React, {Component} from "react";
import { css } from "emotion";

const visible= css({
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '200px',
  height: '150px',
  border: '1px solid blue'
})

const hidden = css({
  display:'none'
})

export default class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      genre: ''
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }
  render() {
    return (
      <div className={ this.props.showModal ? visible : hidden }>
        <section className="modal-body">
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} />
          <input type="genre" value={this.state.genre} name="genre" onChange={this.handleChange.bind(this)} />
          <input type="number" value={this.state.price} name="price" onChange={this.handleChange.bind(this)} />
        </section>
        <button type="buttton" className="close" onClick={this.props.handleClose}>Finish</button>
      </div>
    )
  }
}
