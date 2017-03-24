import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostMeta from './PostMeta';

class Post extends React.Component {
  render() {
    return (
      <div className="photo">
        <PostHeader />
        <div className="photo__img">
          <PostImage />
        </div>
        <PostMeta />
      </div>
    );
  }
}

export default Post;
