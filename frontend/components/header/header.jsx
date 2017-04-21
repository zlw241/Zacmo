import React from 'react';
import SearchContainer from '../search/search_container';
import NavContainer from '../nav/nav_container';
import { Link } from 'react-router';

const Header = () => {

  return (
    <div className="header">
      <Link to="/" className="header-link">
        <em><h1>zacmo</h1></em>
      </Link>
      <SearchContainer className="search-bar"/>
      <NavContainer />
    </div>
  )

}

export default Header;
