import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Routes from "./components/Routers/Routes";
const theme = createMuiTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
