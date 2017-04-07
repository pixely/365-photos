import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Image from '../common/Image';
import * as mediaActions from '../../actions/mediaActions';

const PostImage = props => (
  <div className="post-image">
    <Image image={props.media} />
  </div>
);

PostImage.propTypes = {
  media: PropTypes.shape({
    source_url: PropTypes.string.isRequired,
  }).isRequired,
};

function getMediaById(medias, id, defaultState) {
  const newMedia = medias.filter(media => media.id === id);
  if (newMedia.length) return newMedia[0];
  return defaultState;
}

function mapStateToProps(state, ownProps) {
  const mediaId = ownProps.id;
  let media = { source_url: '' };

  if (mediaId && state.media.length > 0) {
    media = getMediaById(state.media, mediaId, media);
  }

  return {
    media,
  };
}

export default connect(mapStateToProps)(PostImage);
