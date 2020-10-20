import React from "react";

import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routers/Routes";
const theme = createMuiTheme({

});

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <Router>
          <Routes />
        </Router>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;