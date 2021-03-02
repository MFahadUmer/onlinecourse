import React from 'react';
import { Link } from 'react-router-dom';

const AuthorPanelNavbar = () => (
  <div className="authorNavbar">
    <Link to="/authorCourses">
      <span className="fas fa-arrow-circle-left authorNavbarLink" />
    </Link>
    <Link className="authorNavbarLink" to="/addCourse">Add Course</Link>
    <a className="authorNavbarLink" href="http://localhost:3001">Logout</a>
  </div>
);

export default AuthorPanelNavbar;
