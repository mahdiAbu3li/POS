import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import CatagoryList from "../CategoryList/CategoryList";
import ProductList from "../ProductList/ProductList";
interface logoutType {
  onLogout: () => void;
}
function Dashboard({ onLogout }: logoutType) {
  return (
    <div>
      <AppHeader onLogout={onLogout} />
      <h1>Dashboard</h1>
      <CatagoryList />
      <ProductList />
    </div>
  );
}

export default Dashboard;
