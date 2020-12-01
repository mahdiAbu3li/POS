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
  },
  dataFilter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: "10px",
    "& > *": {
      marginRight: "10px",
    },
  },
  datePicker: {
    width: "140px",
    fontSize: "10px",
    margin: "0 10px",
  },container:{
    maxWidth:"70rem",
    marginTop:"7rem"
}
}));
