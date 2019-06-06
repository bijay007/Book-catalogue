import React from 'react';
import { appContainer } from '@common/styles';
import Header from './components/header/header';
import OuterTable from './components/table/outerTable';
import AddUpdateBook from './components/form/selectAddEditForm';
import ModalWrapper from './components/common/modal/modalWrapper';

const AppComponent = () => (
  <main className={appContainer}>
    <Header />
    <ModalWrapper>
      <AddUpdateBook />
    </ModalWrapper>
    <OuterTable />
  </main>
);

export default AppComponent;
