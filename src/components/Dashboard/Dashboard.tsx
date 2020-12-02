import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
interface logoutType {
  onLogout: () => void;
}

function Dashboard({ onLogout }: logoutType) {
  return (
    <div>
      <Router>
        <Drawer onLogout={onLogout} />
      </Router>
    </div>
  );
}

export default Dashboard;
