import React from 'react';
import { Link } from 'react-router';
import NavContainer from './nav/nav_container';
import SearchContainer from './search/search_container';

const App = ({children}) => {


  return (
    <div className="main">

      <header className="header">
        <Link to="/" className="header-link">
          <em><h1>zacmo</h1></em>
        </Link>
        <SearchContainer className="search-bar"/>
        <NavContainer />
      </header>
      {children}
    </div>
  );
}

export default App;
