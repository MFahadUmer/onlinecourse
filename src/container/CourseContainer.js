import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from '../redux/courses/coursesAction';
import Courses from '../component/Courses';
import UserNavbar from '../component/userNavbar';

const CourseContainer = () => {
  const course = useSelector(state => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  const coursesList = course.courses.map(courseData => (
    <Courses
      key={courseData.title}
      uniqueKey={courseData.course_id}
      title={courseData.title}
      details={courseData.details}
      requirements={courseData.requirements}
      difficulty={courseData.difficulty}
      image={courseData.image}
      price={courseData.price}
      author={courseData.author}
      Uploaded={courseData.date}
      index={course.courses.indexOf(courseData) + 1}
      total={course.courses.length}
    />
  ));
  return (
    <>
      <UserNavbar />
      <div className="courseReducer">
        <div className="courseContainerList">
          {coursesList}
        </div>
      </div>
    </>
  );
};

export default CourseContainer;
