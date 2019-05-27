import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
import AppComponent from './App';

const store = configureStore();
const rootDiv = document.getElementById('root');

ReactDOM.render(
  <ReduxProvider store={store}>
    <AppComponent />
  </ReduxProvider>,
  rootDiv
);
