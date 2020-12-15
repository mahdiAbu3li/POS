import { Container } from "@material-ui/core";
import React from "react";
import Tabs from "../Tabs/Tabs";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CategoryCard from "../CategoryCard/CategoryCard";
const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: "2rem",
  },
  cardContainer: {
    padding: "1rem",
  },
}));
function RightPOS() {
  const classes = useStyles();
  return (
    <div>
      <Container
        style={{
          width: "70vw",
        }}
      >
        <Tabs />
        <Paper component="form" className={classes.paper}>
          <InputBase placeholder="Search products " />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className={classes.cardContainer}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </Container>
    </div>
  );
}

export default RightPOS;
