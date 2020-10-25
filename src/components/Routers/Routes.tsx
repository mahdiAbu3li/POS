import React, { useContext, useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppCtx } from "../../LoginContext";
import { DesktopWindows } from "@material-ui/icons";

function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState<string | null >(window.localStorage.getItem("loggedIn"));

  function updateState() {
    setIsLoggedIn("true");
    console.log(isLoggedIn) // false
  }
  window.localStorage.setItem("loggedIn", isLoggedIn !== null ? isLoggedIn : "false");
  console.log(isLoggedIn) 

  

  return (
    <div>
      {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
      <Switch>
        <Route path="/" exact>
          <LoginPage onLogin={updateState} />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
