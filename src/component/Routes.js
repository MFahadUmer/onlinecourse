import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from '../container/LoginContainer';
import SignupContainer from '../container/SignupContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signin" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
