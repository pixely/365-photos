import * as types from './actionTypes';
import * as endpoints from '../api/endpoints';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import { loadMedia } from './mediaActions';
import colorFinder from '../modules/color/finder';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadMediaSuccess(media) {
  return { type: types.LOAD_MEDIA_SUCCESS, media };
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

          if (data[0].featured_media) {
            dispatch(loadMedia(data[0].featured_media));
          }
        });
      } else {
        throw (response);
      }
    }).catch((error) => {
      throw (error);
    });
  };
}
