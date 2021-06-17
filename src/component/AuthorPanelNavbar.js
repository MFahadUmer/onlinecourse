import React from 'react';
import { Link } from 'react-router-dom';

const AuthorPanelNavbar = () => (
  <div className="authorNavbar">
    <Link to="/">
      <span className="fas fa-arrow-circle-left authorNavbarLink" />
    </Link>
    <Link className="authorNavbarLink" to="/addCourse">Add Course</Link>
    <a className="authorNavbarLink" href="https://reactonlinecourse.herokuapp.com/">Logout</a>
  </div>
);

export default AuthorPanelNavbar;
