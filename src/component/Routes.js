import React from 'react';
import {
  BrowserRouter, Switch, Route,
  Redirect,
} from 'react-router-dom';
import SignupContainer from '../container/SignupContainer';
import AppContainer from '../container/AppContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/signin" component={AppContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
