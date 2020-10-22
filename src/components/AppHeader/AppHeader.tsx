import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import Button from "@material-ui/core/Button";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import GroupIcon from "@material-ui/icons/Group";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KitchenIcon from "@material-ui/icons/Kitchen";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      // flexGrow: 1,
      color: "black",
    },
    barButton: {
      paddingLeft: "0",
      color: "white",
      fontWeight: "bold",
      margin: "8px",
      "& :hover": {
        color: "black",
      },
    },
    barList: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "10px",
    },
    bar: {
      backgroundColor: "#ff6f00",

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
      marginTop: "6px",
    },
    barIcon: {
      color: "#673ab7",
      fontWeight: "bold",
      fontSize: "1.5rem",
      fontFamily: '"Sansita Swashed", cursive',
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <div className={classes.list}>
          <div className={classes.leftList}>
            <Button color="inherit" className={classes.barIcon}>
              MAHDI-SHOP
            </Button>

            <div className={classes.barList}>
              <Button
                color="inherit"
                className={classes.barButton}
                startIcon={<CreditCardIcon />}
              >
                POS
              </Button>
              <Button
                color="inherit"
                className={classes.barButton}
                startIcon={<KitchenIcon />}
              >
                Product
              </Button>

              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                className={classes.barButton}
                startIcon={<GroupIcon />}
              >
                people
                <ExpandMoreIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>item1</MenuItem>
                <MenuItem onClick={handleClose}>item2</MenuItem>
                <MenuItem onClick={handleClose}>item3</MenuItem>
              </Menu>
              <Button
                color="inherit"
                className={classes.barButton}
                startIcon={<CreditCardIcon />}
              >
                Sales
              </Button>
              <Button
                color="inherit"
                className={classes.barButton}
                startIcon={<AttachMoneyIcon />}
              >
                Expense
              </Button>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                className={classes.barButton}
                startIcon={<TurnedInIcon />}
              >
                Catagories
                <ExpandMoreIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>item1</MenuItem>
                <MenuItem onClick={handleClose}>item2</MenuItem>
                <MenuItem onClick={handleClose}>item3</MenuItem>
              </Menu>

              <Button
                color="inherit"
                className={classes.barButton}
                startIcon={<SettingsIcon />}
              >
                Settings
              </Button>
              <Button
                color="inherit"
                className={classes.barButton}
                startIcon={<TrendingUpIcon />}
              >
                Reports
              </Button>
            </div>
          </div>
          <div className={classes.rightList}>
            <Avatar
              className={classes.avatar}
              src={require("../../images/mahdi.jpg")}
            ></Avatar>
            <Button
              color="inherit"
              className={classes.barButton}
              endIcon={<ExitToAppIcon />}
            >
              LOGOUT
            </Button>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
