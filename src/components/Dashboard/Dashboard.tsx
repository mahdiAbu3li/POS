import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import CatagoryList from "../CatagoryList/CatagoryList";

function Dashboard() {
  return (
    <div>
      <AppHeader />
      <h1>Dashboard</h1>
      <CatagoryList />
    </div>
  );
}

export default Dashboard;
