import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    paper: {
      width: "100%",
    },
    buttonAction: {
      backgroundColor: "white",
    },
    tableHeader: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
    },container:{
      maxWidth:"60rem",
      marginTop:"7rem"
  }
  }));