import axios from 'axios';
import {
  ADD_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_REQUEST,
  FETCH_COURSE_SUCCESS,
} from './coursesActionTypes';

export const fetchCourseRequest = () => ({
  type: FETCH_COURSE_REQUEST,
});

export const fetchCourseSuccess = courses => ({
  type: FETCH_COURSE_SUCCESS,
  payload: courses,
});

export const fetchCourseFailure = error => ({
  type: FETCH_COURSE_FAILURE,
  payload: error,
});

const addCourseAction = course => ({
  type: ADD_COURSE,
  payload: course,
});

export const addCourse = courseObj => dispatch => {
  axios.post('http://127.0.0.1:3000/courses/', courseObj)
    .then(response => {
      const course = response.data;
      dispatch(addCourseAction(course));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCourseFailure(errorMsg));
    });
};

export const fetchCourse = () => dispatch => {
  dispatch(fetchCourseRequest());
  axios.get('http://127.0.0.1:3000/courses')
    .then(response => {
      const courses = response.data;
      dispatch(fetchCourseSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCourseFailure(errorMsg));
    });
};
