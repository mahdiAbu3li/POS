import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import CatagoryList from "../CatagoryList/CatagoryList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Dashboard() {
  return (
    // <Router>
    <div>
      <AppHeader />
      <Switch>
        
        <Route path="/dashboard">
          <h1>Dashboard</h1>
        </Route>
      </Switch>
    </div>
    //  </Router>
  );
}

export default Dashboard;
