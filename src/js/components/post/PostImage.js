import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Image from '../common/Image';
import * as mediaActions from '../../actions/mediaActions';

const PostImage = props => (
  <div
    className="post-image"
    data-color={`rgb(${props.media.colors[0]}, ${props.media.colors[1]}, ${props.media.colors[2]})`}
  >
    <Image image={props.media} />
  </div>
);

PostImage.defaultProps = {
  media: {
    colors: [0, 0, 0],
  },
};

PostImage.propTypes = {
  media: PropTypes.shape({
    source_url: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ),
  }).isRequired,
};

function getMediaById(medias, id, defaultState) {
  const newMedia = medias.filter(media => media.id === id);
  if (newMedia.length) return newMedia[0];
  return defaultState;
}

function mapStateToProps(state, ownProps) {
  const mediaId = ownProps.id;
  let media = {
    source_url: '',
    colors: [0, 0, 0],
  };

  if (mediaId && state.media.length > 0) {
    media = getMediaById(state.media, mediaId, media);
  }

  return {
    media,
  };
}

export default connect(mapStateToProps)(PostImage);
