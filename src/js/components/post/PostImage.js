import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mediaActions from '../../actions/mediaActions';
import Image from '../common/Image';

class PostImage extends React.Component {
  render() {
    return (
      <div className="post-image">
        <Image image={this.props.media} />
      </div>
    );
  }
}

PostImage.propTypes = {
  media: PropTypes.object.isRequired
};

function getMediaById(medias, id, defaultState) {
  const media = medias.filter(media => media.id == id);
  if (media.length) return media[0];
  return defaultState;
}

function mapStateToProps(state, ownProps) {
  const mediaId = ownProps.id;
  let media = {source_url: ''};

  if (mediaId && state.media.length > 0) {
    media = getMediaById(state.media, mediaId, media);
  }

  return {
    media: media
  };
}

export default connect(mapStateToProps)(PostImage);
