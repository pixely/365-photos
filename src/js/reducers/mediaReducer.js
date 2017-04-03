import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState.media, action) {
  switch(action.type) {
    case types.LOAD_MEDIA_SUCCESS:
      return [
        ...state.filter(media => media.id !== action.media.id),
        Object.assign({}, action.media)
      ];
    default:
      return state;
  }
}
