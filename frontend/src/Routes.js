import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import HomeView from "./views/HomeView";
import Login from "./views/Login";
import { createBrowserHistory } from "history";
import Page404 from "./components/Page404";
import NavBar from "./components/NavBar";
import AuthGuard from "./components/Guards/AuthGuard";

const history = createBrowserHistory();

const routeRender = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <AuthGuard>
            <NavBar />
            <HomeView />
          </AuthGuard>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/notFound" exact>
          <AuthGuard>
            <NavBar />
            <Page404 />
          </AuthGuard>
        </Route>
      </Switch>
    </Router>
  );
};

function Routes() {
  return routeRender({});
}

export default Routes;
