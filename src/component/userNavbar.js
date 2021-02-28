import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  console.log('yes');
  return (
    <div className="userNavbar">
      <Link to="/">|||</Link>
      <h2>Courses</h2>
      <p>search</p>
    </div>
  );
};

export default UserNavbar;
