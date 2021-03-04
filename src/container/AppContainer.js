import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignupContainer from './SignupContainer';
import SignInContainer from './SignInContainer';
import Loading from '../component/Loading';
import AuthorPanelContainer from './AuthorPanelContainer';
import CourseContainer from './CourseContainer';

const AppContainer = () => {
  const user = useSelector(state => state.user);
  if (user.loading) {
    return (
      <Loading loading={user.loading} color="black" />
    );
  }
  if (user.logStatus) {
    if (user.user[0].user.user_type === 'author') {
      return (
        <AuthorPanelContainer userId={user.user[0].user.user_id} />
      );
    } if (user.user[0].user.user_type === 'user') {
      return (
        <CourseContainer />
      );
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignInContainer} exact />
        <Route path="/signin/" component={SignInContainer} exact />
        <Route path="/signup/" component={SignupContainer} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppContainer;
