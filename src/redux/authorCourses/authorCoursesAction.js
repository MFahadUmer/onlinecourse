import axios from 'axios';
import {
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST, FETCH_FAVOURITE_COURSE_SUCCESS,
} from '../favourites/favouriteActionTypes';
import API_LINK_ADDRESS from '../apiAddress';

export const fetchAuthorCoursesRequest = () => ({
  type: FETCH_FAVOURITE_COURSE_REQUEST,
});

export const fetchAuthorCoursesSuccess = courses => ({
  type: FETCH_FAVOURITE_COURSE_SUCCESS,
  payload: courses,
});

export const fetchAuthorCoursesFailure = error => ({
  type: FETCH_FAVOURITE_COURSE_FAILURE,
  payload: error,
});

export const fetchAuthorCourses = userId => dispatch => {
  dispatch(fetchAuthorCoursesRequest());
  axios.post(`${API_LINK_ADDRESS}/authorCourses/${userId}`)
    .then(response => {
      const courses = response.data;
      dispatch(fetchAuthorCoursesSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchAuthorCoursesFailure(errorMsg));
    });
};
