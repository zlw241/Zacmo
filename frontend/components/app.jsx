import React from 'react';
import { Link } from 'react-router';
import NavContainer from './nav/nav_container';
import SearchContainer from './search/search_container';
import Header from './header/header';

const App = ({children}) => {

  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
}

export default App;
