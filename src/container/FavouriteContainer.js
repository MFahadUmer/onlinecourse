import React from 'react';
import { useSelector } from 'react-redux';

const FavouriteContainer = () => {
  const courses = useSelector(state => state.favourite);
  console.log(courses);
  return (
    <div>
      Hey World
    </div>
  );
};

export default FavouriteContainer;
