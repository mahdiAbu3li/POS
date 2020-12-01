import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: "#fff",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#fff",
      "& > *": {
        color: "#283593",
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    barIcon: {
      color: "#283593",
      fontWeight: "bold",
      fontSize: "1.5rem",
      fontFamily: '"Sansita Swashed", cursive',
    },
    barButton: {
      paddingLeft: "0",
      color: "#283593",
      fontWeight: "bold",
      "& :hover": {
        color: "#d50000",
      },
    },
    leftList: {
      display: "flex",
    },
    list: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      width: "100%",
    },
    rightList: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "165px",
    },

    avatar: {
      marginRight: "90px",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    lists: {
      color: "#000",
      "& > *": {
        "& > *": {
          color: "unset",
          "& :hover": {
            color: "#283593",
          },
        },
      },
    },
    corner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    listIcon: {
      color: "#000",
    },
  })
);
