import React, {PropTypes} from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostMeta from './PostMeta';

class Post extends React.Component {
  render() {
    return (
      <div className="photo">
        <div className="photo__inner">
          <PostHeader
            title={`#${this.props.id}`}
          />
          <PostImage id={this.props.featured_media} />
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

Post.propTypes = {
  id: PropTypes.number.isRequired,
  featured_media: PropTypes.number
};

export default Post;
