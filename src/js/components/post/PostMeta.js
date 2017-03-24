import React, {PropTypes} from 'react';

const PostMeta = ({datePublished, location, instagramLink}) => {
  return (
    <div className="post-meta">
      <h3>{datePublished}</h3>
      <h3>{location}</h3>
      <h3>{instagramLink}</h3>
    </div>
  );
}

PostMeta.propTypes = {
  datePublished: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  instagramLink: PropTypes.string.isRequired
};

export default PostMeta;
