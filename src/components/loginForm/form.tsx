import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import {
  
  Link
} from "react-router-dom";


const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  root: {
    backgroundColor: "#F59321",
    color:"#fff"
  },
});
function Form() {
  const styles = useStyles();
  return (
    <>
    <div className={styles.formContainer}>
      <h3>Login to Your Account</h3>
      <TextField
        id="userName"
        label="User Name"
        
        
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
      ></TextField>
      <TextField
        id="password"
        label="Password"
        type="password"
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
      ></TextField>

      <Link to="/dashboard">
      <Button variant="outlined" className={styles.root}>Login</Button>
      </Link>
      
     
      <span style={{ marginLeft: "4rem" }}>&#169; 2020 </span>
    </div>
    </>   
  );
}

export default Form;
