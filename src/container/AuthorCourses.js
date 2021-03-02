// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import Courses from '../component/Courses';

const AuthorCourses = () => {
  const allCourses = useSelector(state => state.authorCourse.courses);
  const authorCourses = allCourses.map(courseData => (
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
    <>
      <h2 className="allCoursesHeader">ALL COURSES ADDED BY YOU.</h2>
      <div className="courseContainerList">
        {authorCourses}
      </div>
    </>
  );
};

export default AuthorCourses;
