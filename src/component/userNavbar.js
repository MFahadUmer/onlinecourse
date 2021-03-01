import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => (
  <div className="userNavbar">
    <Link to="/">
      <span className="fas fa-arrow-circle-left" />
    </Link>
    Courses
    <a href="http://localhost:3001">
      <span className="fas fa-sign-out-alt" />
    </a>
  </div>
);

export default UserNavbar;
