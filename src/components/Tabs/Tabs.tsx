import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";

interface TypeData {
  id: number;
  category_name: string;
  created_at: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    // flexGrow: 1,
    display: "flex",
    width: "100%",
    overflow: "auto",
    whiteSpace: "nowrap",
    height: "70px",
    justifyContent: "center",
  },
  tabButton: {
    borderBottom: "5px solid green",
    margin: "5px",
  },
  active: {
    borderBottom: "5px solid red",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [data, setData] = useState<TypeData[]>([]);
  const [active, setActive] = useState("home");
  React.useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={classes.container}>
      <Button
        className={[
          classes.tabButton,
          active === "home" ? classes.active : "",
        ].join(" ")}
        onClick={() => setActive("home")}
      >
        <HomeIcon />
      </Button>
      {data.map((item) => (
        <Button
          variant="outlined"
          className={[
            classes.tabButton,
            active === item.category_name ? classes.active : "",
          ].join(" ")}
          onClick={() => setActive(item.category_name)}
        >
          {item.category_name}
        </Button>
      ))}
    </div>
  );
}
