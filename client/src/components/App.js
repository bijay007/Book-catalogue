import React, { Component } from 'react';
import AddBook from './addbook';
import { css } from 'emotion';

const container = css({
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '500px',
    marginLeft: '100px',
})
const logo = css({maxWidth: '50px'})

export default class AppComponent extends Component {
    constructor() {
        super()
        this.state = {
            listOfBooks: [],
            showModal: false
        }
    }

    openModal() {
        this.setState({ showModal: true })
    };

    closeModal() {
        this.setState({ showModal: false })
    };

    addBook(book) {
        this.state.listOfBooks.push(book);
    }
    render() {
        return (
            <div className={container}>
                <div className="image">
                    <img src="/client/public/assests/icons/book.svg" className={logo} />
                </div>
                <div className="menu">
                    <button type="button" onClick={this.openModal.bind(this)}>+ Add</button>   
                </div>
                <div className="contents">
                </div>
                <AddBook showModal={this.state.showModal} handleClose={this.closeModal.bind(this)} />
            </div>
        );
    }
}
