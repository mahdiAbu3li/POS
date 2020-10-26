import React from "react";
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
import { useStyles } from "./AppHeaderStyle";


interface logoutType {
  logout: () => void
}
const AppHeader = ({logout}:logoutType) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setAnchorEl2(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  const handleLogout = () => {    
    logout()
  }
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
                aria-controls="people"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                className={classes.barButton}
                startIcon={<GroupIcon />}
              >
                People
                <ExpandMoreIcon />
              </Button>
              <Menu
                id="people"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Customers</MenuItem>
                <MenuItem onClick={handleClose}>Suppliers</MenuItem>
                
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
                aria-controls="catagories"
                aria-haspopup="true"
                onClick={handleClick2}
                color="inherit"
                className={classes.barButton}
                startIcon={<TurnedInIcon />}
              >
                Catagories
                <ExpandMoreIcon />
              </Button>
              <Menu
                id="catagories"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Sales</MenuItem>
                <MenuItem onClick={handleClose}>Expense</MenuItem>
                
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
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default AppHeader;
