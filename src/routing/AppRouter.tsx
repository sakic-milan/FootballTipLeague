import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Login from "../pages/Login";

const AppRouter = () => {
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={BaseLayout} />
    </Switch>
  </Router>;
};

export default AppRouter;
