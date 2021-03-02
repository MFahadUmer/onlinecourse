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
import AuthorCourses from './AuthorCourses';
import { fetchAuthorCourses } from '../redux/authorCourses/authorCoursesAction';
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
          <Route exact path="/authorCourses" component={AuthorCourses} />
          <Route exact path="/" component={AuthorCourses} />
          <Route path="/addCourse" component={AddsCourse} exact />
          <Route path="/couseDetails/:id" component={CourseDetailsContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

AuthorPanelContainer.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default AuthorPanelContainer;
