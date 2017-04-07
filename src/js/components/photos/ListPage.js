import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Post from '../post/Post';
import * as postActions from '../../actions/postActions';
import colorFinder from '../../modules/color/finder';

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

    const test = colorFinder.init('imageurl');
    console.log(test);
  }

  componentWillReceiveProps() {
    this.handleScroll();
  }

  componentWillUnmount() {
    page.removeEventListener('scroll', this.handleScroll);
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
      this.setState({ current: newState });
      browserHistory.push(`/photo/${newState}`);
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
      featured_image: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    media: state.media,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
