import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import PhotosList from './components/photos/ListPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PhotosList} />

    {/* Legacy Routes */}
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />

    {/* 365Photos */}
    <Route path="about" component={AboutPage} />
    <Route path="photos" component={PhotosList} />
    <Route path="photo/:id" component={PhotosList} />

  </Route>
);
