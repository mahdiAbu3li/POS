import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: "black",
    },
    barButton: {
      paddingLeft: "0",
      color: "white",
      fontWeight: "bold",
      
      margin: "8px",
      "& :hover": {
        color: "#d50000",
      },
    },
    barList: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "10px",
    },
    bar: {
      backgroundColor: "#ffa726",

      display: "flex",
    },
    leftList: {
      display: "flex",
    },
    list: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
    },
    rightList: {
      display: "flex",
      justifyContent: "space-between",
    },
    avatar: {
      marginRight: "10px",
      marginTop: "10px",
    },
    barIcon: {
      color: "#ffecb3",
      fontWeight: "bold",
      fontSize: "1rem",
      fontFamily: '"Sansita Swashed", cursive',
      marginRight: "20px",
    },
  })
);
