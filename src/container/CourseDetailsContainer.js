import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CourseDetails from '../component/CourseDetails';
import {
  deleteFromFavourite,
  addToFavourites,
} from '../redux/favourites/favouriteActions';

const CourseDetailsContainer = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const userId = user.user_id;
  const favouriteCourses = useSelector(state => state.favourite.courses);
  const favouriteCoursesIds = favouriteCourses.map(courses => courses.course_id);
  const BookSearch = useSelector(state => state.course.courses);
  const courseId = parseInt(match.params.id, 10);
  const requiredBook = BookSearch.filter(course => course.course_id === courseId);
  const handleAddToFavourite = () => {
    dispatch(addToFavourites({
      user_id: userId,
      course_id: courseId,
    }, requiredBook));
  };
  const handleRemoveFromFavourite = () => {
    dispatch(deleteFromFavourite({
      user_id: userId,
      course_id: courseId,
    }));
  };
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
        check={favouriteCoursesIds.includes(course.course_id) ? 'Remove From Favourites' : 'Add To Favourites'}
        handleAddToFavourite={handleAddToFavourite}
        handleRemoveFromFavourite={handleRemoveFromFavourite}
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
