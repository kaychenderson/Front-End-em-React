// yarn create react-app myshop
// yarn add styled-components
// yarn add @types/styled-components
// yarn add react-icons

// yarn add redux react-redux
// yarn add redux-logger
// yarn add -D @types/redux-logger

import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductsList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
