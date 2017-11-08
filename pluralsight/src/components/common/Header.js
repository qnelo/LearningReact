import React from 'react';
import { IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
    </nav>
  );
};

export default Header;