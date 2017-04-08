import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Post from '../post/Post';
import * as mediaActions from '../../actions/mediaActions';

// fetch from endpoint

// set scroll position

let page;

class ListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      current: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    page = document.querySelector('.page');
    page.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillReceiveProps() {
    this.handleScroll();
  }

  componentWillUnmount() {
    page.removeEventListener('scroll', this.handleScroll);
  }

  updateColor(color = [0, 0, 0]) {
    this.colorVal = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    document.documentElement.style.setProperty('--background', this.colorVal);
  }

  handleScroll() {
    const scrollTop = page.scrollTop;
    const photos = Array.from(page.querySelectorAll('.photo'));

    // TODO: Trigger URL change when reaching new photo
    // TODO: Trigger colour change when half way to a new photo

    const newState = photos
      .map((photo, index) => {
        if (scrollTop >= photo.offsetTop && scrollTop < (photo.offsetTop + photo.clientHeight)) {
          return index;
        }
        return false;
      })
      .filter(photo => Number.isInteger(photo))
      .filter(photo => this.state.current !== photo)[0];

    if (newState >= 0) {
      this.props.actions.loadMedia(this.props.posts[newState].featured_media);

      const featuredImageId = this.props.posts[newState].featured_media;
      const featuredImageColor = this.props.media
      .filter(media => media.id === featuredImageId)
      .map(media => media.colors)[0];


      this.updateColor(featuredImageColor);
      this.setState({ current: newState });
    //  browserHistory.push(`/photo/${newState}`);
    }
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          {this.props.posts.map(post =>
            <Post
              key={post.id}
              {...post}
            />,
          )}
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      featured_media: PropTypes.number,
    }).isRequired,
  ).isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      source_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  actions: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    media: state.media,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mediaActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
