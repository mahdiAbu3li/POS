import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({

})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <LoginPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
