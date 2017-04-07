import * as types from './actionTypes';
import * as endpoints from '../api/endpoints';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadMediaSuccess(media) {
  return { type: types.LOAD_MEDIA_SUCCESS, media };
}

export function loadMedia(media) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    fetch(endpoints.MEDIA_ENDPOINT + media, {
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
  };
}
