import axios from 'axios';
import {
  API_RESPONSE_STATUS, USER_FAILURE, USER_LOG_STATUS, USER_SIGNIN, USER_SIGNUP,
} from './userActionTypes';

export const userRegistrationAction = userDetails => ({
  type: USER_SIGNUP,
  payload: userDetails,
});

export const userFailure = error => ({
  type: USER_FAILURE,
  payload: error,
});

export const userLoginAction = userDetails => ({
  type: USER_SIGNIN,
  payload: userDetails,
});

export const apiResponseStatus = status => ({
  type: API_RESPONSE_STATUS,
  payload: status,
});

export const userLogStatus = value => ({
  type: USER_LOG_STATUS,
  payload: value,
});

export const userLogin = userObj => dispatch => {
  axios.post('https://desolate-cove-81044.herokuapp.com/login', userObj)
    .then(response => {
      if (response.status === 200) {
        dispatch(apiResponseStatus(response.status));
        dispatch(userLogStatus(true));
        const userDetails = response.data;
        dispatch(userLoginAction(userDetails));
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userFailure(errorMsg));
    });
};

export const userRegistration = userObj => dispatch => {
  axios.post('https://desolate-cove-81044.herokuapp.com/users/', userObj)
    .then(response => {
      const user = response.data;
      dispatch(userRegistrationAction(user));
      dispatch(userLogStatus(true));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userFailure(errorMsg));
    });
};
