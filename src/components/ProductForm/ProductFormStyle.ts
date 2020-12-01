import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  colors: {
    display: "flex",
    "& > *": {
      height: "30px",
      width: "30px",
      textAlign: "center",
      color: "white",
    },
    "& :nth-child(1)": {
      backgroundColor: "#213597",
    },
    "& :nth-child(2)": {
      backgroundColor: "blue",
    },
    "& :nth-child(3)": {
      backgroundColor: "green",
    },
    "& :nth-child(4)": {
      backgroundColor: "orange",
    },
    "& :nth-child(5)": {
      backgroundColor: "black",
    },
    "& :nth-child(6)": {
      backgroundColor: "rgb(21,54,56)",
    },
    "& :nth-child(7)": {
      backgroundColor: "red",
    },
  },
  dialogContent: {
   "& > *":{
    marginTop:"20px"
   }
  },
});
