import {
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST,
  FETCH_FAVOURITE_COURSE_SUCCESS,
} from './favouriteActionTypes';
import axios from "axios";

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

export const fetchFavouriteCourses = () => dispatch => {
  dispatch(fetchFavouriteCourseRequest());
  axios.get('http://localhost:3000/favourites/2')
    .then(response => {
      const courses = response.data;
      dispatch(fetchFavouriteCourseSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFavouriteCoursesFailure(errorMsg));
    });
};
