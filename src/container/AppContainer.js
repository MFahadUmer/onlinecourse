import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse, fetchCourse } from '../redux/courses/coursesAction';

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  const myCourse = {
    course_title: 'Seerat E Muhammadia',
    course_details: 'Seerat E Mustafa',
    course_author: 'Seerat E Mustafa',
    course_requirements: 'Seerat E Mustafa',
    course_difficulty: 'Seerat E Mustafa',
  };
  const handleChange = () => {
    dispatch(addCourse(myCourse));
  };
  return (
    <div>
      <button
        type="submit"
        onClick={() => handleChange()}
      >
        Add
      </button>
    </div>
  );
};

export default AppContainer;
