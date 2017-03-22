import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Nav = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/photos" activeClassName="active">Photos</Link>
      {" | "}
      <Link to="/photos/1" activeClassName="active">Photo 1</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Nav.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Nav;
