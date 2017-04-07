import * as types from './actionTypes';
import * as endpoints from '../api/endpoints';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadMediaSuccess(media) {
  return { type: types.LOAD_MEDIA_SUCCESS, media };
}

function loadMedia(dispatch, featured_media) {
  fetch(endpoints.MEDIA_ENDPOINT + featured_media, {
    method: 'get',
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        dispatch(loadMediaSuccess(data));
      });
    } else {
      throw (response);
    }
  }).catch((error) => {
    throw (error);
  });
}

export function loadPosts() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    fetch(endpoints.POSTS_ENDPOINT, {
      method: 'get',
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch(loadPostsSuccess(data));

          data.map((post) => {
            if (post.featured_media) {
              loadMedia(dispatch, post.featured_media);
            }
            return false;
          });
        });
      } else {
        throw (response);
      }
    }).catch((error) => {
      throw (error);
    });
  };
}
