import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => (
  <div className="userNavbar">
    <Link to="/"><span className="fas fa-bars" /></Link>
    <h2>Courses</h2>
    <p><span className="fas fa-search" /></p>
  </div>
);

export default UserNavbar;
