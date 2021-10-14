import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutingPath from './RoutingPath';
import { HomePage } from '../pages/HomePage';
import { PomodoroPage } from '../pages/PomodoroPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { DefaultPage } from '../pages/DefaultPage';

export const Routing = (props) => {
  return (
      <Router>
        {props.children}
        <Switch>
          <Route exact path={RoutingPath.homePage} component={HomePage} />
          <Route
            exact
            path={RoutingPath.pomodoroPage}
            component={PomodoroPage}
          />
          <Route exact path={RoutingPath.signInPage} component={SignInPage} />
          <Route exact path={RoutingPath.signUpPage} component={SignUpPage} />
          <Route exact path="*" component={DefaultPage} />
        </Switch>
      </Router>
  );
};
