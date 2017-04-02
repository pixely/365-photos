import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const API_BASE = 'http://365.pixely.co.uk/wp-json/wp/v2/';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    fetch(`${API_BASE}posts`, {
      method: 'get'
    }).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          dispatch(loadPostsSuccess(data));
        });
      } else {
        throw("Looks like the response wasn't perfect, got status " +  response.status);
      }
    }).catch(function(error) {
      throw(error);
    });
  };
}
