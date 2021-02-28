import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavouriteCourses } from '../redux/favourites/favouriteActions';

const FavouriteContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavouriteCourses(2));
  }, []);
  return (
    <div>
      Hey World
    </div>
  );
};

export default FavouriteContainer;
