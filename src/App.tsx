import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routers/Routes";
import AuthController from "./components/Routers/AuthController";

const theme = createMuiTheme({
  palette: {
   primary:{
     main:"#ffa726"
   }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
        <AuthController >
          <Routes />

        </AuthController>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
