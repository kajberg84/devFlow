import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutingPath from './RoutingPath';
import { HomePage } from '../pages/HomePage/HomePage';
import { PomodoroPage } from '../pages/PomodoroPage/PomodoroPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { DefaultPage } from '../pages/DefaultPage/DefaultPage';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { TodoPage } from '../pages/TodoPage/TodoPage';
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Main = (props) => {
  return (
    <Router>
      <Header />
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.homePage} component={HomePage} />
        <Route exact path={RoutingPath.pomodoroPage} component={PomodoroPage} />
        <Route exact path={RoutingPath.signInPage} component={SignInPage} />
        <Route exact path={RoutingPath.signUpPage} component={SignUpPage} />
        <Route exact path={RoutingPath.dashboardPage} component={DashboardPage} />
        <Route exact path={RoutingPath.todoPage} component={TodoPage} />
        <Route exact path="*" component={DefaultPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
