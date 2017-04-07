import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Post from '../post/Post';
import * as postActions from '../../actions/postActions';

// fetch from endpoint

// set scroll position
let page;

class ListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      current: null
    };

    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    page = document.querySelector('.page');
    page.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    page.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = page.scrollTop;
    let photos = Array.from(page.querySelectorAll('.photo'));

    // TODO: Trigger URL change when reaching new photo
    // TODO: Trigger colour change when half way to a new photo

    let newState = photos
      .map((photo, index) => {
        if( scrollTop >= photo.offsetTop && scrollTop < (photo.offsetTop + photo.clientHeight) ){
          return index;
        }
      })
      .filter(Boolean)
      .filter(photo => this.state.current !== photo )[0];

    if( newState ) {
      this.setState({current: newState});
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
            />
          )}
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    media: state.media
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
