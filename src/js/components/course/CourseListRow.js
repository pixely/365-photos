import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = course => (
  <tr>
    <td><a href={course.watchHref} target="_blank" rel="noopener noreferrer">Watch</a></td>
    <td><Link to={`/course/${course.id}`}>{ course.title }</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
  </tr>
);

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default CourseListRow;
