import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.image.source_url} alt="" />
    );
  }
}

export default Image;
