import axios from 'axios';
import { USER_SIGNIN, USER_SIGNUP } from './userActionTypes';

export const userRegistrationAction = userDetails => ({
  type: USER_SIGNUP,
  payload: userDetails,
});

export const userLoginAction = userDetails => ({
  type: USER_SIGNIN,
  payload: userDetails,
});

export const userLogin = userObj => dispatch => {
  axios.post('http://localhost:3000/login', userObj)
    .then(response => {
      if (response.status === 200) {
        const userDetails = response.data;
        dispatch(userLoginAction(userDetails));
      }
    });
};

export const userRegistration = userObj => dispatch => {
  axios.post('http://localhost:3000/users', userObj)
    .then(response => {
      const user = response.data;
      dispatch(userRegistrationAction(user));
    });
};
