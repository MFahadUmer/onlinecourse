import React from 'react';
import { Link } from 'react-router-dom';

const AppContainer = () => (
  <div>
    <Link to="/signin">SIGNIN</Link>
    <Link to="/signup">SIGNUP</Link>
  </div>
);

export default AppContainer;
