import React from 'react';
import { useSelector } from 'react-redux';
import Courses from '../component/Courses';

const CourseContainer = () => {
  const courses = useSelector(state => state.course.courses);
  console.log(courses);
  const coursesList = courses.map(course => (
    <Courses
      key={course.title}
      title={course.title}
      details={course.details}
      requirements={course.requirements}
      difficulty={course.difficulty}
      author={course.author}
      Uploaded={course.date}
    />
  ));
  return (
    <div>
      <h2>Hey From COurse COntainer</h2>
      {coursesList}
    </div>
  );
};

export default CourseContainer;
