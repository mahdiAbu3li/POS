import React from "react";
import { Paper } from "@material-ui/core";

import Form from "../loginForm/form";
import { useStyles } from "./LoginPageStyle";

function LoginPage() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__background}></div>
        <div className={styles.container__leftPanel}>
          <h1>Mahdi &nbsp; Shop</h1>
          <img
            src={require("../../images/7.png")}
            style={{ width: "55vw", marginTop: "4rem" }}
            alt=""
          />
        </div>
        <div className={styles.container__rightPanel}>
          <Paper
            elevation={3}
            classes={{ root: styles.root }}
            className={styles.container__rightPanel__paper}
          >
            <Form />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
