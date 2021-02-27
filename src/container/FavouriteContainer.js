import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourse } from '../redux/courses/coursesAction';

const FavouriteContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  return (
    <div>
      Hey WOrld!
    </div>
  );
};

export default FavouriteContainer;
