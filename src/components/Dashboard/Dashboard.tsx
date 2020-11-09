import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import CatagoryList from "../CatagoryList/CatagoryList";

interface logoutType {
  onLogout: () => void
}
function Dashboard({onLogout}:logoutType) {

  return (
    <div>
      <AppHeader onLogout={onLogout}/>
      <h1>Dashboard</h1>
      <CatagoryList />
    </div>
  );
}

export default Dashboard;
