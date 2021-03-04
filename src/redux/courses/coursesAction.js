import axios from 'axios';
import {
  ADD_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_REQUEST,
  FETCH_COURSE_SUCCESS,
  SET_MESSAGE,
} from './coursesActionTypes';
import API_LINK_ADDRESS, { header } from '../apiAddress';

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

export const addCourseAction = course => ({
  type: ADD_COURSE,
  payload: course,
});

export const setMessage = msg => ({
  type: SET_MESSAGE,
  payload: msg,
});

export const addCourse = courseObj => dispatch => {
  dispatch(fetchCourseRequest());
  axios.post(`${API_LINK_ADDRESS}/courses/`, courseObj, header)
    .then(response => {
      const course = response.data;
      dispatch(addCourseAction(course));
      dispatch(setMessage('Course Added.'));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCourseFailure(errorMsg));
    });
};

export const fetchCourse = () => dispatch => {
  dispatch(fetchCourseRequest());
  axios.get(`${API_LINK_ADDRESS}/courses`, header)
    .then(response => {
      const courses = response.data;
      dispatch(fetchCourseSuccess(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCourseFailure(errorMsg));
    });
};
