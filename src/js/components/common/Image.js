import React, {PropTypes} from 'react';

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.image.source_url} alt="" />
    );
  }
}

Image.propTypes = {
    image: PropTypes.shape({
      source_url: PropTypes.string.isRequired
    }).isRequired
};

export default Image;
