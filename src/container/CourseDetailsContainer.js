import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseDetails from '../component/CourseDetails';
import { addToFavourites, deleteFromFavourite } from '../redux/favourites/favouriteActions';

// eslint-disable-next-line react/prop-types
const CourseDetailsContainer = ({ match }) => {
  const dispatch = useDispatch();
  const addFavouriteHandler = courseObj => {
    dispatch(addToFavourites(courseObj));
  };
  const favouriteCheck = useSelector(state => state.favourite.courses);
  const deleteFavouriteHandler = courseObj => {
    // eslint-disable-next-line no-unused-vars
    const deleteFav = favouriteCheck.filter(course => course.user_id === courseObj.user_id
      && course.course_id === courseObj.course_id).map(course => (
      dispatch(deleteFromFavourite(course.id))
    ));
  };
  const userId = useSelector(state => state.user.user.user_id);
  const userFavouritesIds = [];
  // eslint-disable-next-line no-unused-vars
  const userFavourites = favouriteCheck.filter(course => course.user_id === userId)
    .map(course => userFavouritesIds.push(course.course_id));
  // eslint-disable-next-line react/prop-types,no-unused-vars
  const courseId = parseInt(match.params.id, 10);
  const courseDetail = useSelector(state => state.course.courses);
  const filtered = courseDetail.filter(course => course.course_id === courseId)
    .map(course => (
      <CourseDetails
        key={course.course_id}
        uniqueKey={course.course_id}
        userid={userId}
        title={course.title}
        details={course.details}
        requirements={course.requirements}
        difficulty={course.difficulty}
        image={course.image}
        price={course.price}
        date={course.date}
        check={userFavouritesIds.includes(course.course_id) ? 'Remove Favourite' : 'Add Favourite'}
        addFavouriteHandler={addFavouriteHandler}
        deleteFavouriteHandler={deleteFavouriteHandler}
      />
    ));
  return (
    <div>
      {filtered}
    </div>
  );
};

export default CourseDetailsContainer;
