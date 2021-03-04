import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthorPanelNavbar from '../component/AuthorPanelNavbar';
import AddsCourse from './AddsCourse';
// eslint-disable-next-line no-unused-vars
import AuthorCourses from './AuthorCourses';
import { fetchAuthorCourses } from '../redux/authorCourses/authorCoursesAction';
// eslint-disable-next-line no-unused-vars
import CourseDetailsContainer from './CourseDetailsContainer';

const AuthorPanelContainer = ({ userId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthorCourses(userId));
  });
  return (
    <div>
      <BrowserRouter>
        <AuthorPanelNavbar />
        <Switch>
          <Route path="/addCourse" component={AddsCourse} exact />
          <Route path="/" component={AuthorCourses} exact />
          <Route path="/authorCourses" component={AuthorCourses} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

AuthorPanelContainer.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default AuthorPanelContainer;
