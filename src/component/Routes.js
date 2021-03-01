import React from 'react';
import {
  BrowserRouter, Switch, Route,
  Redirect,
} from 'react-router-dom';
import SignupContainer from '../container/SignupContainer';
import AppContainer from '../container/AppContainer';
import AuthorPanelContainer from '../container/AuthorPanelContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/signin" component={AppContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/addCourse" component={AuthorPanelContainer} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
