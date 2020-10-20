import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
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
  containerBackground: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    background: "linear-gradient(-10deg, rgb(251, 255, 0), #f58621)",
    clipPath:
      "polygon( 50% 0%, 100% 0, 70% 40%, 69% 73%,26% 82%,0 100%,0% 70%,0% 35%,0 0)",
  },
  containerLeftPanel: {
    zIndex: 11,
    color: "#fff",
    fontFamily: 'Sansita Swashed", cursive',
    "& h1": {
      fontSize: "4.5vw",
      fontFamily: "'Sansita Swashed', cursive",
    },
  },
  containerRightPanel: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  containerRightPanelPaper: {
    width: "15rem",
    height: "20rem",
    zIndex: 55,
    margin: "1rem",
    marginTop: "8rem",
  },
  "@media only screen and (max-width: 600px)": {
    containerLeftPanel: {
      "& > *": {
        display: "none",
      },
    },
    containerBackground: {
      clipPath: "circle(58.4% at 48% 4%)",
    },
  },
  "@media only screen and (min-width: 600px)": {
    containerLeftPanel: {
      "& > *": {
        display: "none",
      },
      containerBackground: {
        clipPath:
          "polygon(50% 0%,73% 0,39% 40%,% 73%,26% 107%,0 100%,0% 70%, 35%,0 0)",
      },
    },
  },
  "@media only screen and (min-width: 768px)": {
    containerLeftPanel: {
      "& > *": {
        display: "none",
      },
    },
  },
  "@media only screen and (min-width: 992px)": {
    containerBackground: {
      clipPath: "circle(71% at 6% 5%)",
    },
    containerLeftPanel: {
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
    containerRightPanel: {
      width: "50%",
    },
    containerRightPanel__paper: {
      width: "20rem",
      height: "45vh",
      marginTop: "32vh",
    },
  },
  "@media only screen and (min-width: 1200px)": {
    containerBackground: {
      clipPath: "circle(60% at 6% 5%)",
    },
  },
}));
