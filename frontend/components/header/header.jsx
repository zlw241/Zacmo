import React from 'react';
import SearchContainer from '../search/search_container';
import NavContainer from '../nav/nav_container';
import { Link } from 'react-router';

const Header = () => {

  return (
    <div className="header">
      <div className="header-link">
        <Link to="/" >
          <em><h1>zacmo</h1></em>
        </Link>
      </div>
      <SearchContainer className="search-bar"/>
      <NavContainer />
    </div>
  )

}

export default Header;
