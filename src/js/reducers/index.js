import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import posts from './postReducer';
import media from './mediaReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  posts,
  media,
  ajaxCallsInProgress,
});

export default rootReducer;
