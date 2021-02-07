import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
