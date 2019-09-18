import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default Routes;