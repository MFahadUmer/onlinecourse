import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignupContainer from '../container/SignupContainer';
import AddsCourse from '../container/AddsCourse';
import AuthorCourses from '../container/AuthorCourses';
import LogoutContainer from '../container/LogoutContainer';
import AppContainer from '../container/AppContainer';
import CourseDetails from './CourseDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/signin" component={AppContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/addCourse" component={AddsCourse} />
      <Route exact path="/couseDetails/:id" component={CourseDetails} />
      <Route exact path="/authorCourses" component={AuthorCourses} />
      <Route exact path="/logout" component={LogoutContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
