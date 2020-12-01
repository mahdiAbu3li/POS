import React from "react";
import { Paper } from "@material-ui/core";

import FormLogin from "../loginForm/FormLogin";
import { useStyles } from "./LoginPageStyle";

interface LoginFormType {
  onLogin: () => void;
}
function LoginPage({ onLogin }: LoginFormType) {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerBackground}></div>
        <div className={styles.containerLeftPanel}>
          <h1>Mahdi &nbsp; Shop</h1>
          <img
            src={require("../../images/7.png")}
            style={{ width: "50vw"}}
            alt=""
          />
        </div>
        <div className={styles.containerRightPanel}>
          <Paper
            elevation={3}
            classes={{ root: styles.root }}
            className={styles.containerRightPanelPaper}
          >
            <FormLogin onLogin={onLogin} />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
