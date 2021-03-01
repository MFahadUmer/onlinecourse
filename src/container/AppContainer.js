import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/users/userAction';
import AuthorPanelContainer from './AuthorPanelContainer';
import CourseContainer from './CourseContainer';

const AppContainer = () => {
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
      <div className="background loginContainer">
        <div className="signinHeaderDiv">
          <h2 className="signinHeader">Sign In</h2>
        </div>
        <div className="paragraphDiv">
          <p className="paragraph">Hello there! Sign in and start managing your system</p>
        </div>
        <div className="loginForm">
          <input className="inputField" type="text" placeholder="USERNAME" name="username" onChange={e => handleChange(e)} />
          <input className="inputField" type="password" placeholder="PASSWORD" name="password" onChange={e => handleChange(e)} />
          <input className="submitField" type="submit" value="LOGIN" onClick={() => handleSubmit()} />
          {loggedUser.error === '' ? '' : <p className="signinErrorMsg">Invalid Credentials</p>}
          <Link className="signupLink" to="/signup/">SIGNUP</Link>
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
      <CourseContainer userId={loggedUser.user.user_id} />
    </div>
  );
};

export default AppContainer;
