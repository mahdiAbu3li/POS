import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import CatagoryList from "../CatagoryList/CatagoryList";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

function Dashboard() {
  const useStyles = makeStyles({
    
  })
  return (
    <div>
      <AppHeader />

      <Container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",          
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>
        <CatagoryList />
      </Container>
    </div>
  );
}

export default Dashboard;
