import React, {PropTypes} from 'react';

const PostHeader = ({title}) => {
  return (
    <div className="post-header">
      <h2 className="post-header__title">{title}</h2>
    </div>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PostHeader;
