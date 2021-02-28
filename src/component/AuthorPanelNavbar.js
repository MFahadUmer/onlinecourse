import React from 'react';
import { Link } from 'react-router-dom';

const AuthorPanelNavbar = () => (
  <div>
    <h2>Welcome To Author Panel</h2>
    <Link to="/addCourse">Add Course</Link>
    <Link to="/authorCourses">Add Course</Link>
    <Link to="/logout">Logout</Link>
  </div>
);

export default AuthorPanelNavbar;
