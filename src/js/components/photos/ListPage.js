import React from 'react';
import {Link} from 'react-router';
import Post from '../post/Post';

// fetch from endpoint

// set scroll position


class ListPage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="container">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </div>
    );
  }
}

export default ListPage;
