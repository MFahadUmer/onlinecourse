import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegistration } from '../redux/users/userAction';

const SignupContainer = () => {
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

  return (
    <div className="signupContainer">
      <input type="text" name="firstname" placeholder="First Name" onChange={e => handleChange(e)} />
      <input type="text" name="lastname" placeholder="Last Name" onChange={e => handleChange(e)} />
      <input type="text" name="username" placeholder="Username" onChange={e => handleChange(e)} />
      <input type="email" name="email" placeholder="Email" onChange={e => handleChange(e)} />
      <select name="usertype" value="user" onChange={e => handleChange(e)}>
        <option value="user">User</option>
        <option value="author">Author</option>
      </select>
      <input type="password" name="password" placeholder="password" onChange={e => handleChange(e)} />
      <input type="submit" value="signup" onClick={() => handleSubmit()} />
    </div>
  );
};

export default SignupContainer;
