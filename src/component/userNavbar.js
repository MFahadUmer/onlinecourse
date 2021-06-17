import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserNavbar = () => {
  const location = useLocation();
  let title = '';
  if (location.pathname === '/') {
    title = 'Courses';
  } else if (location.pathname === '/favourites') {
    title = 'Favourite Courses';
  } else {
    title = 'Course Details';
  }
  return (
    <div className="userNavbar">
      <div>
        {location.pathname === '/'
          ? (
            <div className="dropdown">
              <span className="fas fa-bars userNavbarLink dropdown" />
              <div className="dropdown-content">
                <div className="dropDownLinksContainer">
                  <Link className="dropDownLinks" to="/favourites"> Favourites </Link>
                  <a className="dropDownLinks" href="https://reactonlinecourse.herokuapp.com/">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          )
          : (
            <Link to="/">
              <span className="fas fa-arrow-circle-left userNavbarLink" />
            </Link>
          )}
      </div>

      <p className="userNavbarLink">
        {title}
      </p>
      <p>
        <span className="fas fa-search userNavbarLink" />
      </p>
    </div>
  );
};

export default UserNavbar;
