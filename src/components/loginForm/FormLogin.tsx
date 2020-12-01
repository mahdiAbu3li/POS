import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Formik, Form, Field } from "formik";

interface Values {
  userName: string;
  password: string;
}
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
    background: "linear-gradient(45deg, #283593 30%, #64b5f6 90%)",
    color: "#fff",
  },
  container: {
    height: "20rem",
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

interface LoginFormProps {
  // Called when the user successfully loges in
  onLogin: () => void;
}

function FormLogin({ onLogin }: LoginFormProps) {
  const styles = useStyles();

  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (values.userName === "") {
            errors.userName = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            validateLogin(values.userName, values.password).then((isValid) => {
              if (isValid) {
                onLogin();
              } else {
              }
            });
          }, 2000);
        }}
      >
        {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
          <div className={styles.layout}>
            <Form>
              <Grid container className={styles.container}>
                <Grid item xs={12}>
                  <h3>Login to Your Account</h3>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    type="text"
                    name="userName"
                    label="User Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    type="password"
                    name="password"
                    label="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    className={styles.button}
                    // onClick={submitForm}
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  {isSubmitting && <CircularProgress />}
                </Grid>
                <Grid item xs={12}>
                  <span>&#169; 2020 </span>
                </Grid>
              </Grid>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
