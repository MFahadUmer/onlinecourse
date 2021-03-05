import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => (
  <div className="userNavbar">
    <Link to="/">
      <span className="fas fa-arrow-circle-left userNavbarLink" />
    </Link>
    <Link className="userNavbarLink" to="/favourites">Favourites</Link>
    <a className="userNavbarLink" href="https://reactonlinecourse.herokuapp.com/">
      <span className="fas fa-sign-out-alt userNavbarLink" />
    </a>
  </div>
);

export default UserNavbar;
