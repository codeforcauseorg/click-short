import React from 'react'
import { Route, Switch, Router } from "react-router-dom";
import HomeView from './views/HomeView'
import Login from './views/Login';
import { createBrowserHistory } from 'history';
import Page404 from './components/Page404';

const history = createBrowserHistory();

const routeRender = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={props => <HomeView />} />
        <Route path="/login" exact render={props => <Login />} />
        <Route path="/notFound" exact render={props => <Page404 />} />
      </Switch>
    </Router>
  )
}

function Routes() {
  return routeRender({});
}

export default Routes;