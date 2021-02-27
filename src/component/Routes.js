import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from '../container/LoginContainer';
import SignupContainer from '../container/SignupContainer';
import AddsCourse from '../container/AddsCourse';
import AuthorCourses from '../container/AuthorCourses';
import LogoutContainer from '../container/LogoutContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signin" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/addCourse" component={AddsCourse} />
      <Route exact path="/authorCourses" component={AuthorCourses} />
      <Route exact path="/logout" component={LogoutContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
