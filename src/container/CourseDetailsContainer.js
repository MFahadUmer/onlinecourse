import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CourseDetails from '../component/CourseDetails';
import { addToFavourites } from '../redux/favourites/favouriteActions';

const CourseDetailsContainer = ({ match }) => {
  const dispatch = useDispatch();
  const addFavouriteHandler = courseObj => {
    console.log(dispatch(addToFavourites(courseObj)));
  };
  const favouriteCheck = useSelector(state => state.favourite.courses);
  const deleteFavouriteHandler = courseObj => {
    console.log(`Yesssssss deleteFavouriteHandler clicked ${courseObj}`);
  };
  const userId = useSelector(state => state.user.user.user_id);
  const userFavourites = favouriteCheck.filter(course => course.user_id === userId)
    .map(course => course.course_id);
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
        check={userFavourites.includes(course.course_id) ? 'Remove Favourite' : 'Add Favourite'}
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

CourseDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

CourseDetailsContainer.defaultProps = {
  match: {},
};

export default CourseDetailsContainer;
