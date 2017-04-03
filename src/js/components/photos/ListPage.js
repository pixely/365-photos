import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Post from '../post/Post';
import * as postActions from '../../actions/postActions';

// fetch from endpoint

// set scroll position

class ListPage extends React.Component {
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
