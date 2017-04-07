import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

const App = props => (
  <div>
    <Header
      loading={props.loading}
    />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
