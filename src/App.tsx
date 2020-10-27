import React from "react";

import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routers/Routes";
const theme = createMuiTheme({
  palette: {
   primary:{
     main:"#ffa726"
   },
   secondary:{
     main:"#3949ab"
   }
  },
});

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
