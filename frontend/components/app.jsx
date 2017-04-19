import React from 'react';
import { Link } from 'react-router';
import NavContainer from './nav/nav_container';

const App = ({children}) => {

  return (
    <div className="main">
      <header className="header">
        <Link to="/" className="header-link">
          <h1>zacmo</h1>
        </Link>
        <NavContainer />
      </header>
      {children}
    </div>
  );
}

export default App;
