import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/users/userAction';
import AuthorPanelContainer from './AuthorPanelContainer';
import CourseContainer from './CourseContainer';

const LoginContainer = () => {
  const loggedUser = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setpassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    dispatch(userLogin({ username, password }));
  };

  if (loggedUser.user.length === 0) {
    return (
      <div className="loginContainer">
        <div className="loginForm">
          <input type="text" placeholder="USERNAME" name="username" onChange={e => handleChange(e)} />
          <input type="password" placeholder="PASSWORD" name="password" onChange={e => handleChange(e)} />
          <input type="submit" value="LOGIN" onClick={() => handleSubmit()} />
        </div>
      </div>
    );
  } if (loggedUser.user.user_type === 'author') {
    return (
      <AuthorPanelContainer />
    );
  }
  return (
    <div>
      <CourseContainer />
    </div>
  );
};

export default LoginContainer;
