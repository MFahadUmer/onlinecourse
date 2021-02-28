import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthorPanelNavbar from '../component/AuthorPanelNavbar';
import AddsCourse from './AddsCourse';
import AuthorCourses from './AuthorCourses';
import LogoutContainer from './LogoutContainer';
import { fetchCourse } from '../redux/courses/coursesAction';

const AuthorPanelContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  });
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
