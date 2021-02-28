import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRegistration } from '../redux/users/userAction';
import AppContainer from './AppContainer';

const SignupContainer = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [usertype, setusertype] = useState('');
  const [password, setpassword] = useState('');
  const handleChange = e => {
    if (e.target.name === 'firstname') {
      setfirstname(e.target.value);
    } else if (e.target.name === 'lastname') {
      setlastname(e.target.value);
    } else if (e.target.name === 'username') {
      setusername(e.target.value);
    } else if (e.target.name === 'email') {
      setemail(e.target.value);
    } else if (e.target.name === 'usertype') {
      setusertype(e.target.value);
    } else {
      setpassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    dispatch(userRegistration({
      first_name: firstname,
      last_name: lastname,
      username,
      user_type: usertype,
      email,
      password,
    }));
  };

  if (user.user.length === 0) {
    return (
      <div className="background signupContainer">
        <div className="signupForm">
          <input className="inputField" type="text" name="firstname" placeholder="First Name" onChange={e => handleChange(e)} />
          <input className="inputField" type="text" name="lastname" placeholder="Last Name" onChange={e => handleChange(e)} />
          <input className="inputField" type="text" name="username" placeholder="Username" onChange={e => handleChange(e)} />
          <input className="inputField" type="email" name="email" placeholder="Email" onChange={e => handleChange(e)} />
          <select className="inputField" name="usertype" defaultValue="user" onChange={e => handleChange(e)}>
            <option value="user">User</option>
            <option value="author">Author</option>
          </select>
          <input className="inputField" type="password" name="password" placeholder="password" onChange={e => handleChange(e)} />
          <input className="submitField" type="submit" value="signup" onClick={() => handleSubmit()} />
        </div>
        <div>
          <Link className="signinLink" to="/signin/">SIGNIN</Link>
        </div>
      </div>
    );
  }

  return (
    <AppContainer />
  );
};

export default SignupContainer;
