import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CatagoryList from "../CategoryList/CategoryList";
import ProductList from "../ProductList/ProductList";

interface logoutType {
  onLogout: () => void;
}
function Dashboard({ onLogout }: logoutType) {
  return (
    <div>
      <Router>
        <AppHeader onLogout={onLogout} />

        <Switch>
          <Route exact path="/dashboard">
            <h1>Dashboard</h1>
          </Route>
          <Route path="/dashboard/categories" component={CatagoryList}></Route>
          <Route path="/dashboard/products" component={ProductList}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
