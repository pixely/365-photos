import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostMeta from './PostMeta';

class Post extends React.Component {
  render() {
    return (
      <div className="photo">
        <div className="photo__inner">
          <PostHeader title="Post Title" />
          <PostImage />
          <PostMeta
            datePublished="01/01/2017"
            location="Location string"
            instagramLink="http://instagram.com"
          />
        </div>
      </div>
    );
  }
}

export default Post;
