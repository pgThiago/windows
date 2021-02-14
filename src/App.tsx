import React from 'react';

import { GlobalStyle } from './globalStyles'
import Home from './pages/Home'

import WindowProvider from './context'

function App() {
  return (
    <WindowProvider>
      <GlobalStyle />
        <Home />
    </WindowProvider>
  );
}

export default App;
