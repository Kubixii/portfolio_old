import './App.css';

import Main from './components/Main/Main';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import StoreProvider from './store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <Sidebar />
      <Main />
    </StoreProvider>
  );
}

export default App;