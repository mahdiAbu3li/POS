import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import Grid from "@material-ui/core/Grid";

const validateLogin = async (userName: string, password: string) => {
  return fetch(
    `http://localhost:8000/users?username=${userName}&password=${password}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        return true;
      } else return false;
    });
};

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#fff",
  },
}));

interface LoginFormProps {
  // Called when the user successfully loges in
  onLogin: () => void;
}

function Form({ onLogin }: LoginFormProps) {
  const styles = useStyles();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);

  function handleLogin() {
    setError(null);
    validateLogin(name, password).then((isValid) => {
      if (isValid) {
        onLogin();
      } else {
        setError("Username/password is invalid");
        console.log(error);
      }
    });
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h3>Login to Your Account</h3>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          <Button
            variant="outlined"
            className={styles.button}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>

        <Grid item xs={12}>
          <span>&#169; 2020 </span>
        </Grid>
      </Grid>
    </>
  );
}

export default Form;
