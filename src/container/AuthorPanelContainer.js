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
import { fetchCourse } from '../redux/courses/coursesAction';

const AuthorPanelContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  });
  return (
    <div>
      <BrowserRouter>
        <AuthorPanelNavbar />
        <Switch>
          <Route path="/addCourse" component={AddsCourse} exact />
          <Route path="/" component={AuthorCourses} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AuthorPanelContainer;
