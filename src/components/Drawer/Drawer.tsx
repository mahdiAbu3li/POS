import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Switch, Route } from "react-router-dom";
import CatagoryList from "../CategoryList/CategoryList";
import ProductList from "../ProductList/ProductList";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import KitchenIcon from "@material-ui/icons/Kitchen";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import GroupIcon from "@material-ui/icons/Group";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useStyles } from "./DrawerStyle";
import { useTheme } from "@material-ui/core/styles";

interface Props {
  onLogout: () => void;
}

export default function ResponsiveDrawer(props: Props) {
  const { onLogout } = props;
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openPeople, setOpenPeople] = React.useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const handleClick = () => {
    setOpenPeople(!openPeople);
  };

  const handleClickCategories = () => {
    setOpenCategories(!openCategories);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={[classes.toolbar, classes.corner].join(" ")}>
        <Button color="inherit" className={classes.barIcon}>
          Mahdi-Shop
        </Button>
      </div>

      <Divider />
      <List className={classes.lists}>
        <ListItem button key="POS">
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="POS" />
        </ListItem>
        <ListItem
          button
          key="Product"
          onClick={() => history.push("/dashboard/products")}
        >
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Product" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
          {openPeople ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPeople} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Suppliers" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button key="Sales">
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Sales" />
        </ListItem>
        <ListItem button key="Expense">
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Expense" />
        </ListItem>
        <ListItem button onClick={handleClickCategories}>
          <ListItemIcon>
            <TurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Catagories" />
          {openCategories ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategories} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => history.push("/dashboard/categories")}
            >
              <ListItemText primary="Sales" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Expense" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button key="Settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button key="Reports">
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.list}>
            <div className={classes.leftList}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.rightList}>
              <Avatar
                // className={classes.avatar}
                src={require("../../images/mahdi.jpg")}
              ></Avatar>
              <Button
                color="inherit"
                className={classes.barButton}
                endIcon={<ExitToAppIcon />}
                onClick={onLogout}
              >
                LOGOUT
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path="/dashboard">
            <h1>Dashboard</h1>
          </Route>
          <Route path="/dashboard/categories" component={CatagoryList}></Route>
          <Route path="/dashboard/products" component={ProductList}></Route>
        </Switch>
      </main>
    </div>
  );
}
