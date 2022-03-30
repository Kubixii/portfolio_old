import './App.css';

import Main from './components/Main/Main';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import StoreProvider from './store/StoreProvider';

//TODO  add a 'page' for links linkedin, github, 
//      add meta tags, favicon

const App = () => {
  return (
    <StoreProvider>
      <Sidebar />
      <Main />
    </StoreProvider>
  );
}

export default App;