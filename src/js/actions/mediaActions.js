import * as types from './actionTypes';
import * as endpoints from '../api/endpoints';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadMediaSuccess(media) {
  return { type: types.LOAD_MEDIA_SUCCESS, media };
}

export function loadMedia(media) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    fetch(endpoints.MEDIA_ENDPOINT + media, {
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
  };
}
