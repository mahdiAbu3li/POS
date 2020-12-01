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
    backgroundColor: "#fff",
    color: "#000",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",  
    width:"55vw"
  },
  container: {
    maxWidth: "60vw",
    marginTop: "2rem",
  },
  tableRow: {
    "& > *": {
      color: "#000",
    },
  },
  search: {
    width: "15vw",
  },
  "@media only screen and (max-width: 600px)": {
    container: {
      maxWidth: "90vw",
    },
  },
}));
