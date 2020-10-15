import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/5.png";
// import styles from "./LoginPage.module.css";
import Form from "../loginForm/form";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    justifyItems: "space-between",
  },
  container: {
    backgroundColor: "rgb(255, 255, 255)",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  container__background: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    background: "linear-gradient(-10deg, rgb(251, 255, 0), #f58621)",
    clipPath:
      "polygon( 50% 0%, 100% 0, 70% 40%, 69% 73%,26% 82%,0 100%,0% 70%,0% 35%,0 0)",
  },
  container__leftPanel: {
    zIndex: 11,
    color: "#fff",
    fontFamily: 'Sansita Swashed", cursive',
    "& h1": {
      fontSize: "4.5vw",
      fontFamily: "'Sansita Swashed', cursive",
    },
  },
  container__rightPanel: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  container__rightPanel__paper: {
    width: "15rem",
    height: "20rem",
    zIndex: 55,
    margin: "1rem",
    marginTop: "8rem",
  },
  "@media only screen and (max-width: 600px)": {
    container__leftPanel: {
      "& > *": {
        display: "none",
      },
    },
    container__background: {
      clipPath: "circle(58.4% at 48% 4%)",
    },
  },
  "@media only screen and (min-width: 600px)": {
    container__leftPanel: {
      "& > *": {
        display: "none",
      },
      container__background: {
        clipPath:
          "polygon(50% 0%,73% 0,39% 40%,% 73%,26% 107%,0 100%,0% 70%, 35%,0 0)",
      },
    },
  },
  "@media only screen and (min-width: 768px)": {
    container__leftPanel: {
      "& > *": {
        display: "none",
      },
    },
  },
  "@media only screen and (min-width: 992px)": {
    container__background: {
      clipPath: "circle(71% at 6% 5%)",
    },
    container__leftPanel: {
      "& > *": {
        display: "block",
      },
      "& h1": {
        margin: "5rem 10rem 0",
      },
      width: "50%",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
    },
    container__rightPanel: {
      width: "50%",
    },
    container__rightPanel__paper: {
      width: "20rem",
      height: "45vh",
      marginTop: "32vh",
    },
  },
  "@media only screen and (min-width: 1200px)": {
    container__background: {
      clipPath: "circle(60% at 6% 5%)",
    },
  },
}));

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
