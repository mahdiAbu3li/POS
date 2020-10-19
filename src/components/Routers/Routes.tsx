import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Routes() {
  return (
    <div>
     
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
     
    </div>
  );
}

export default Routes;
