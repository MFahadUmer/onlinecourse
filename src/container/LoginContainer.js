import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/users/userAction';

const LoginContainer = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
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

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <input type="text" placeholder="USERNAME" name="username" onChange={e => handleChange(e)} />
        <input type="password" placeholder="PASSWORD" name="password" onChange={e => handleChange(e)} />
        <input type="submit" value="LOGIN" onClick={() => handleSubmit()} />
      </div>
    </div>
  );
};

export default LoginContainer;
