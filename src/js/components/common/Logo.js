import React from 'react';
import {IndexLink} from 'react-router';

const Logo = () => {
  return (
    <IndexLink to="/" className="logo">
      365<span className="logo__sub">Photos</span>
    </IndexLink>
  );
};

export default Logo;
