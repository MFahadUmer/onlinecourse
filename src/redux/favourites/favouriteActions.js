import axios from 'axios';
import {
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

export const fetchFavouriteCourses = userId => dispatch => {
  dispatch(fetchFavouriteCourseRequest());
  axios.get(`http://localhost:3000/favourites/${userId}`)
    .then(response => {
      const courses = response.data;
      dispatch(fetchFavouriteCourseSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFavouriteCoursesFailure(errorMsg));
    });
};
