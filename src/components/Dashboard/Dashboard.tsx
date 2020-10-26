import React from "react";
import AppHeader from "../AppHeader/AppHeader";
interface logoutType {
  logout: () => void
}
function Dashboard({logout}:logoutType) {
  return (
    <div>
      <AppHeader logout={logout}/>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
