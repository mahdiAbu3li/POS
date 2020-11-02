import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function Routes() {
  return (
    <div>
      <AuthContext.Consumer>
        {(value) => (
          <Switch>
            <Route path="/" exact>
              <LoginPage onLogin={value.handleLogin} />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard onLogout={value.handleLogout} />
            </PrivateRoute>
          </Switch>
        )}
      </AuthContext.Consumer>
    </div>
  );
}

export default Routes;
