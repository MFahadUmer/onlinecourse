import React from 'react';
import { useSelector } from 'react-redux';
import Courses from '../component/Courses';
import Loading from '../component/Loading';

const AuthorCourses = () => {
  const allCourses = useSelector(state => state.authorCourse);
  const authorCourses = allCourses.courses.map(courseData => (
    <Courses
      key={courseData.course_id}
      uniqueKey={courseData.course_id}
      title={courseData.title}
      total={allCourses.courses.length}
      index={allCourses.courses.indexOf(courseData) + 1}
      image={courseData.image}
      price={courseData.price}
    />
  ));
  return (
    <>
      {allCourses.loading ? <Loading loading={allCourses.loading} color="yellow" /> : '' }
      <h2 className="allCoursesHeader">ALL COURSES ADDED BY YOU.</h2>
      <div className="courseContainerList">
        {authorCourses}
      </div>
    </>
  );
};

export default AuthorCourses;
