import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="page jumbotron">
        <div className="container">
          <h1>365Photos</h1>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
