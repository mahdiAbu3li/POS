import React from "react";
import AppHeader from "../AppHeader/AppHeader";
interface logoutType {
  onLogout: () => void
}
function Dashboard({onLogout}:logoutType) {
  return (
    <div>
      <AppHeader onLogout={onLogout}/>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
