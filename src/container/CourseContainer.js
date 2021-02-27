import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourse } from '../redux/courses/coursesAction';
import Courses from '../component/Courses';

const CourseContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  const courses = useSelector(state => state.course);
  console.log(courses);
  const coursesList = courses.courses.map(course => (
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
      <h2>Hey From Course COntainer</h2>
      {coursesList}
      <Link to="/favourites">Favourite</Link>
    </div>
  );
};

export default CourseContainer;
