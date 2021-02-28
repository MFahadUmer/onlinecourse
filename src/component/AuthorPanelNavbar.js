import React from 'react';
import { Link } from 'react-router-dom';

const AuthorPanelNavbar = () => (
  <div className="authorNavbar">
    <Link className="authorNavbarLink" to="/addCourse">Add Course</Link>
    <Link className="authorNavbarLink" to="/authorCourses">Author Courses</Link>
    <Link className="authorNavbarLink" to="https://reactonlinecourse.herokuapp.com/">Logout</Link>
  </div>
);

export default AuthorPanelNavbar;
