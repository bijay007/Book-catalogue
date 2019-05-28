import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from './redux/actions/modalActions';
import { appContainer, appMenu, menuImage, transparentBtn } from '@styles/styles';
import OuterTable from './components/table/outerTable';
import AddUpdateBook from './components/form/selectAddEditForm';
import DropDownMenu from './components/dropdown/mainDropdown';
import ModalWrapper from './components/common/modal/modalWrapper';

class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      filteredBooks: [],
    };
    this.showFilteredBooks = this.showFilteredBooks.bind(this);
    this.clearBookFilter = this.clearBookFilter.bind(this);
  }

  showFilteredBooks(books) {
    this.setState({ filteredBooks: books });
  }

  clearBookFilter() {
    this.setState({ filteredBooks: [] });
  }

  render() {
    const { listOfBooks, _openModal } = this.props;
    return (
      <main className={appContainer}>
        <header className={appMenu}>
          <div className={menuImage}>
            <img src="/public/assests/icons/main_logo.svg" alt="logo" className={menuImage} />
          </div>
          <DropDownMenu
            listOfBooks={listOfBooks}
            showFilteredBooks={this.showFilteredBooks}
            clearBookFilter={this.clearBookFilter}
          />
          <button type="button" className={transparentBtn} onClick={() => _openModal()}>
            <img src="/public/assests/icons/add_book.svg" alt="Add book" className={menuImage} />
          </button>
        </header>
        <ModalWrapper>
          <AddUpdateBook />
        </ModalWrapper>
        <OuterTable />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfBooks: state.bookListState.listOfBooks
});

const mapDispatchToProps = (dispatch) => {
  return {
    _openModal: () => dispatch(openModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
