import React from 'react';
import { Link } from 'react-router-dom';

const AuthorPanelNavbar = () => (
  <div className="authorNavbar">
    <Link className="authorNavbarLink" to="/addCourse">Add Course</Link>
    <Link className="authorNavbarLink" to="/authorCourses">Author Courses</Link>
    <a className="authorNavbarLink" href="http://localhost:3001">Logout</a>
  </div>
);

export default AuthorPanelNavbar;
