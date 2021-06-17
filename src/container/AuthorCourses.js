import React from 'react';
import { useSelector } from 'react-redux';
import Courses from '../component/Courses';
import Loading from '../component/Loading';

const AuthorCourses = () => {
  const userId = useSelector(state => state.user.user[0].user.id);
  const allCourses = useSelector(state => state.course);
  const authorCourses = allCourses.courses.filter(courseFilter => courseFilter.author === userId);
  const filteredCourses = authorCourses.map(courseData => (
    <Courses
      key={courseData.course_id}
      uniqueKey={courseData.course_id}
      title={courseData.title}
      total={authorCourses.length}
      index={authorCourses.indexOf(courseData) + 1}
      image={courseData.image}
      price={courseData.price}
    />
  ));
  return (
    <>
      {allCourses.loading ? <Loading loading={allCourses.loading} color="yellow" /> : '' }
      <h2 className="allCoursesHeader">ALL COURSES ADDED BY YOU.</h2>
      <div className="courseContainerList">
        {filteredCourses}
      </div>
    </>
  );
};

export default AuthorCourses;
