import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import Nav from './Nav';
import Logo from './Logo';

const Header = ({loading}) => {
  return (
    <header className="main-header">
      <div className="container">
        <Logo />
        <Nav loading={loading} />
      </div>
    </header>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
