import axios from 'axios';
import API_LINK_ADDRESS, { header } from '../apiAddress';
import {
  USER_API_FAILURE,
  USER_API_REQUEST, USER_API_SUCCESS,
} from './userActionTypes';

export const userApiRequest = () => ({
  type: USER_API_REQUEST,
});

export const userApiSuccess = user => ({
  type: USER_API_SUCCESS,
  payload: user,
});

export const userApiFailure = error => ({
  type: USER_API_FAILURE,
  payload: error,
});

export const userLogin = userObj => dispatch => {
  dispatch(userApiRequest());
  axios.post(`${API_LINK_ADDRESS}/login`, userObj, header)
    .then(response => {
      const userDetails = response.data;
      dispatch(userApiSuccess(userDetails));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userApiFailure(errorMsg));
    });
};

export const userRegistration = userObj => dispatch => {
  dispatch(userApiRequest());
  axios.post(`${API_LINK_ADDRESS}/users/`, userObj, header)
    .then(response => {
      const user = response.data;
      dispatch(userApiSuccess(user));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userApiFailure(errorMsg));
    });
};
