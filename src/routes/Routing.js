import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomePage } from "../pages/HomePage/HomePage";
import { PomodoroPage } from "../pages/PomodoroPage/PomodoroPage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { DefaultPage } from "../pages/DefaultPage/DefaultPage";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { TodoPage } from "../pages/TodoPage/TodoPage";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { SignedInHeader } from "../components/signedinheader/SignedInHeader";
import { SignedInFooter } from "../components/signedinfooter/SignedInFooter";
import { UserContext } from "../utils/provider/UserProvider";
import { useHistory } from "react-router-dom";
import SettingsComponent from "../components/settingscomponent/SettingsComponent";

export const Main = (props) => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);

  const authenticatedUser = () => {
    setAuthUser(localStorage.getItem("username"));
  };

  const logout = () => {
    localStorage.removeItem("username");
    setAuthUser(false);
  };

  const displayHeader = () => {
    if (authUser || authenticatedUser()) {
      return <SignedInHeader />;
    } else {
      return <Header />;
    }
  };

  const displayFooter = () => {
    if (authUser || authenticatedUser()) {
      return <SignedInFooter />;
    } else {
      return <Footer />;
    }
  }

  return (
    <Router>
      {displayHeader()}
      {props.children}
      <SettingsComponent />
      <Switch>
        <Route exact path={RoutingPath.homePage} component={HomePage} />
        <Route exact path={RoutingPath.pomodoroPage} component={PomodoroPage} />
        <Route exact path={RoutingPath.signInPage} component={SignInPage} />
        <Route exact path={RoutingPath.signUpPage} component={SignUpPage} />
        <Route
          exact
          path={RoutingPath.dashboardPage}
          component={DashboardPage}
        />
        <Route exact path={RoutingPath.todoPage} component={TodoPage} />
        <Route exact path="*" component={DefaultPage} />
      </Switch>
      {displayFooter()}
    </Router>
  );
};
