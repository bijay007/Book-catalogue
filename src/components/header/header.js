import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '@redux/actions/modalActions';
import { appMenu, menuImage, transparentBtn } from '@common/styles';
import DropDownMenu from '../dropdown/mainDropdown';

const Header = (props) => {
  const { listOfBooks, _openModal } = props;
  return (
    <header className={appMenu}>
      <div className={menuImage}>
        <img src="/public/assests/icons/main_logo.svg" alt="logo" className={menuImage} />
      </div>
      <DropDownMenu
        listOfBooks={listOfBooks}
      />
      <button type="button" className={transparentBtn} onClick={() => _openModal()}>
        <img src="/public/assests/icons/add_book.svg" alt="Add book" className={menuImage} />
      </button>
    </header>
  )
}

const mapStateToProps = (state) => ({
  listOfBooks: state.bookListState.listOfBooks
});

const mapDispatchToProps = (dispatch) => {
  return {
    _openModal: () => dispatch(openModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
