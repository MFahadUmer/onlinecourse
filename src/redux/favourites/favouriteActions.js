import axios from 'axios';
import {
  ADD_COURSE_TO_FAVOURITE,
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST,
  FETCH_FAVOURITE_COURSE_SUCCESS, REMOVE_COURSE_FROM_FAVOURITE,
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

export const deleteFromFavouriteAction = userId => ({
  type: REMOVE_COURSE_FROM_FAVOURITE,
  payload: userId,
});

export const fetchFavouriteCourses = userId => dispatch => {
  dispatch(fetchFavouriteCourseRequest());
  axios.post(`https://desolate-cove-81044.herokuapp.com/userFavourite/${userId}`)
    .then(response => {
      const courses = response.data;
      dispatch(fetchFavouriteCourseSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFavouriteCoursesFailure(errorMsg));
    });
};

export const addToFavourites = (courseObj, course) => dispatch => {
  dispatch(addCourseToFavourite(course));
  axios.post('https://desolate-cove-81044.herokuapp.com/favourites/', courseObj);
};

export const deleteFromFavourite = favObj => dispatch => {
  dispatch(deleteFromFavouriteAction(favObj.course_id));
  axios.post('https://desolate-cove-81044.herokuapp.com/deletefavourite/', favObj);
};
