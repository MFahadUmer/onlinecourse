// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import Courses from '../component/Courses';

const AuthorCourses = () => {
  const allCourses = useSelector(state => state.course.courses);
  // eslint-disable-next-line no-unused-vars
  const authorCourses = allCourses.filter(course => course.author === 2)
    // eslint-disable-next-line no-unused-vars
    .map(courseData => (
      <Courses
        key={courseData.course_id}
        uniqueKey={courseData.course_id}
        title={courseData.title}
        total={allCourses.length}
        index={allCourses.indexOf(courseData) + 1}
        image={courseData.image}
        price={courseData.price}
      />
    ));
  return (
    <div>
      {authorCourses}
    </div>
  );
};

export default AuthorCourses;
