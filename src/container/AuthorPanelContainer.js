import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import AuthorPanelNavbar from '../component/AuthorPanelNavbar';
import AddsCourse from './AddsCourse';
import AuthorCourses from './AuthorCourses';
import LogoutContainer from './LogoutContainer';

const AuthorPanelContainer = () => {
  console.log('yessss');
  return (
    <BrowserRouter>
      <AuthorPanelNavbar />
      <Switch>
        <Route path="/addCourse" component={AddsCourse} exact />
        <Route path="/authorCourses" component={AuthorCourses} exact />
        <Route path="/logout" component={LogoutContainer} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthorPanelContainer;
