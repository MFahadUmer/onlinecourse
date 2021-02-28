import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  console.log('yes');
  return (
    <div>
      <Link to="/allCourses/">All Courses</Link>
      <Link to="/favourites/">Favourites</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default UserNavbar;
