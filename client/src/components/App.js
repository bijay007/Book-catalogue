import React, { Component } from 'react';
import AddBook from './addbook';
import { css } from 'emotion';

const container = css({
    display: 'flex',
    flexDirection: 'column',
    width: '550px',
    marginLeft: '150px',
    border: '2px solid blue',
    boxShadow: '1px 1px 2px 1px'
})
const image = css({
    padding: '5px',
    maxWidth: '40px'
})
const menu = css({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px'
})
const add_btn = css({
    border: 'none',
    background: 'none'
})

export default class AppComponent extends Component {

    constructor() {
        super()
        this.state = {
            listOfBooks: [],
            showModal: false
        }
    }

    openModal() {
        this.setState({showModal: true})
    };

    closeModal() {
        this.setState({showModal: false})
    };

    addBook(book) {
        this.state.listOfBooks.push(book);
    }

    render() {
        return (
            <div className={container}>
                <div className={menu}>
                    <div className={image}>
                        <img src="/client/public/assests/icons/main_logo.svg" className={image} />
                    </div>
                    <button type="button" className={add_btn} onClick={this.openModal.bind(this)}>
                        <img src="/client/public/assests/icons/add_book.svg" className={image} />
                    </button>
                </div>
                <div className="contents">
                </div>
                <AddBook showModal={this.state.showModal} closeModal={this.closeModal.bind(this)} addBook={this.addBook.bind(this)}/>
            </div>
        );
    }
}
