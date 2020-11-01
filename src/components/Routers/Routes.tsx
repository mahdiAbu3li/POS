import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import {  Switch, Route } from "react-router-dom";
import CatagoryList from "../CatagoryList/CatagoryList";
import AppHeader from "../AppHeader/AppHeader";

function Routes() {
  return (
    <div>
      <AppHeader />
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/category">
          <CatagoryList />
        </Route>
        </Switch>
     
    </div>
  );
}

export default Routes;
