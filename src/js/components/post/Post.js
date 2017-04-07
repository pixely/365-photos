import React, { PropTypes } from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostMeta from './PostMeta';

const Post = props => (
  <div
    className="photo"
    route={props.id}
  >
    <div className="photo__inner">
      <PostHeader
        title={`#${props.id}`}
      />
      <PostImage id={props.featured_media} />
      <PostMeta
        datePublished="01/01/2017"
        location="Location string"
        instagramLink="http://instagram.com"
      />
    </div>
  </div>
);

Post.defaultProps = {
  featured_media: 0,
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  featured_media: PropTypes.number,
};

export default Post;
