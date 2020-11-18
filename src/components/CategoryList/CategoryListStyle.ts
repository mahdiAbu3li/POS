import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    paper: {
      width: "55%",
    },
    buttonAction: {
      backgroundColor: "white",
    },
    tableHeader: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
    toolBar: {
      display: "flext",
      justifyContent: "space-between",
    },
    rowStyle: {
      backgroundColor: "#FFECB3",
    },
  }));