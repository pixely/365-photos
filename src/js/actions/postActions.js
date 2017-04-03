import * as types from './actionTypes';
import * as endpoints from '../api/endpoints';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadMediaSuccess(media) {
  return { type: types.LOAD_MEDIA_SUCCESS, media };
}

function loadMedia() {
  // return fetch
}
export function loadPosts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    fetch(endpoints.POSTS_ENDPOINT, {
      method: 'get'
    }).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          dispatch(loadPostsSuccess(data));

          data.map(post => {
            if (post.featured_media){
              fetch(endpoints.MEDIA_ENDPOINT + post.featured_media, {
                method: 'get'
              }).then(function(response) {
                if (response.ok) {
                  response.json().then(function(data) {
                    dispatch(loadMediaSuccess(data));
                  });
                } else {
                  throw("Looks like the response wasn't perfect, got status " +  response.status);
                }
              }).catch(function(error) {
                throw(error);
              });
            }
          });
        });
      } else {
        throw("Looks like the response wasn't perfect, got status " +  response.status);
      }
    }).catch(function(error) {
      throw(error);
    });
  };
}
