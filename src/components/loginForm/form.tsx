import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#fff",
  },
}));
function Form() {
  const styles = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h3>Login to Your Account</h3>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>

        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Link className={styles.linkStyle} to="/dashboard">
            <Button variant="outlined" className={styles.button}>
              Login
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <span>&#169; 2020 </span>
        </Grid>
      </Grid>
    </>
  );
}

export default Form;
