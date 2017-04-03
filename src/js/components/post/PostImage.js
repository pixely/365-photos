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

PostImage.PropTypes = {
  media: PropTypes.object.isRequired
};

function getMediaById(medias, id, defaults) {
  const media = medias.filter(media => media.id == id);
  if (media.length) return media[0];
  return defaults;
}

function mapStateToProps(state, ownProps) {
  const mediaId = ownProps.id;
  let media = {id: '', watchHref: '', title: '', authorId: '', length: '', source_url: ''};

  if (mediaId && state.media.length > 0) {
    media = getMediaById(state.media, mediaId, media);
  }

  return {
    media: media
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mediaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostImage);
