import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoutingPath from './RoutingPath';
import { HomePage } from '../pages/HomePage';
import { PomodoroPage } from '../pages/PomodoroPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { DefaultPage } from '../pages/DefaultPage';

// Detta är en simpel router som hanterar alla routes. (Behövs denna förbättras eller är den good enough?)

export const Routing = (props) => {
  return (
    <div>
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
          <Route component={DefaultPage} />
        </Switch>
      </Router>
    </div>
  );
};
