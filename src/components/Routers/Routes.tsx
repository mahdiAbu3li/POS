import React, { useContext, useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppCtx } from "../../LoginContext";
import { DesktopWindows } from "@material-ui/icons";

function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(
    window.localStorage.getItem("loggedIn")
  );

  function updateState() {
    setIsLoggedIn("true");
    window.localStorage.setItem("loggedIn", "true");
  }

  function handleLogout() {
    setIsLoggedIn("false");
    window.localStorage.setItem("loggedIn", "false");
  }

  return (
    <div>
      {isLoggedIn === "true" ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/" />
      )}
      <Switch>
        <Route path="/" exact>
          <LoginPage onLogin={updateState} />
        </Route>

        <Route path="/dashboard">
          <Dashboard logout={handleLogout} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
