import React, { PropTypes } from 'react';

const Image = props => (
  <img src={props.image.source_url} alt="" />
);

Image.propTypes = {
  image: PropTypes.shape({
    source_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Image;
