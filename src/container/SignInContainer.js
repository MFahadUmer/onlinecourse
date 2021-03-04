import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../redux/users/userAction';

const SignInContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  console.log(user);
  const handleChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setpassword(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (username !== '' || password !== '') {
      setErrorMsg('');
      dispatch(userLogin({ username, password }));
      setpassword('');
      setUsername('');
    } else {
      setErrorMsg('Enter Login Details');
    }
  };
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
        {errorMsg === '' ? '' : <div className="warningText">{errorMsg}</div> }
        {user.error === '' ? '' : <div className="warningText">Invalid Details</div>}
        <Link className="signupLink" to="/signup/">SIGNUP</Link>
      </div>
    </div>
  );
};

export default SignInContainer;
