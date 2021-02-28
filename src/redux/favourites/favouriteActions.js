import axios from 'axios';
import {
  ADD_COURSE_TO_FAVOURITE,
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST,
  FETCH_FAVOURITE_COURSE_SUCCESS,
} from './favouriteActionTypes';

export const fetchFavouriteCourseRequest = () => ({
  type: FETCH_FAVOURITE_COURSE_REQUEST,
});

export const fetchFavouriteCourseSuccess = courses => ({
  type: FETCH_FAVOURITE_COURSE_SUCCESS,
  payload: courses,
});

export const fetchFavouriteCoursesFailure = error => ({
  type: FETCH_FAVOURITE_COURSE_FAILURE,
  payload: error,
});

export const addCourseToFavourite = courseObj => ({
  type: ADD_COURSE_TO_FAVOURITE,
  payload: courseObj,
});

export const fetchFavouriteCourses = () => dispatch => {
  dispatch(fetchFavouriteCourseRequest());
  axios.get('http://localhost:3000/favourites/')
    .then(response => {
      const courses = response.data;
      dispatch(fetchFavouriteCourseSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFavouriteCoursesFailure(errorMsg));
    });
};

export const addToFavourites = courseObj => dispatch => {
  axios.post('http://localhost:3000/favourites/', courseObj)
    .then(response => {
      const course = response.data;
      dispatch(addCourseToFavourite(course));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFavouriteCoursesFailure(errorMsg));
    });
};
