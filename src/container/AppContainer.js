import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse, fetchCourse } from '../redux/courses/coursesAction';

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  return (
    <div>
      <button
        type="submit"
        onClick={addCourse({
          course_title: 'Seerat E Muhammadia',
          course_details: 'Seerat E Mustafa',
          course_author: 'Seerat E Mustafa',
          course_requirements: 'Seerat E Mustafa',
          course_difficulty: 'Seerat E Mustafa',
        })}
      >
        Add
      </button>
    </div>
  );
};

export default AppContainer;
