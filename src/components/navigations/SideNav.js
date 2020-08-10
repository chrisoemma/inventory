import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Dashboard from "@material-ui/icons/Dashboard";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { Divider } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import CodeIcon from "@material-ui/icons/Code";
import ShopIcon from "@material-ui/icons/Shop";
import ReportIcon from "@material-ui/icons/Report";
import { Link } from "react-router-dom";

const SideNav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expOpen, setExpOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [stockOpen, setStockOpen] = React.useState(false);
  const [salesOpen, setSalesOpen] = React.useState(false);
  const [purchaseOpen, setPurchaseOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickExpense = () => {
    setExpOpen(!expOpen);
  };

  const settingsHandleClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  const stockHandleClick = () => {
    setStockOpen(!stockOpen);
  };

  const salesHandleClick = () => {
    setSalesOpen(!salesOpen);
  };

  const purchaseHandleClick = () => {
    setPurchaseOpen(!purchaseOpen);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button onClick={stockHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Stock" />
        {stockOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={stockOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/stocks/new_coconuts"
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="New coconuts" />
          </ListItem>
          <ListItem button className={classes.nested}   component={Link}
            to="/stocks/coconuts_list">
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText secondary="Coconuts list" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText secondary="Oil obtained" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText secondary="Spoiled Oil" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText secondary="Clean oil" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ShopIcon />
            </ListItemIcon>
            <ListItemText secondary="packeged oil" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={salesHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {salesOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={salesOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="New sale Quote" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="New sale order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText secondary="Order list" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText secondary=" New Customer" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText secondary="Customer list" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={purchaseHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Purchasing" />
        {purchaseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={purchaseOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Purchase order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Purchase order list" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary=" New Vendor" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Vendors list" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickExpense}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Expenses" />
        {expOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={expOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="New expense" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Expense list" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Sales order details" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Sales order profit details" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Inventory" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Customers " />
          </ListItem>
          <Divider />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Purchasing" />
          </ListItem>
        </List>
      </Collapse>

      <Divider />

      <ListItem
        button
        onClick={settingsHandleClick}
        className={classes.settings}
      >
        <ListItemIcon>
          <SettingsApplicationsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {settingsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {/* <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Regions" />
          </ListItem> */}
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/settings/payment_methods"
          >
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText secondary="Payment methods" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/settings/expenses_categories"
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Expense categories" />
          </ListItem>

          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/settings/expenses"
          >
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText secondary="Expenses" />
          </ListItem>

          {/* <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText secondary="Account codes" />
          </ListItem> */}
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/settings/vendors"
          >
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText secondary="Vendors" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/settings/outlets"
          >
            <ListItemIcon>
              <ShopIcon />
            </ListItemIcon>
            <ListItemText secondary="Outlets shops" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  settings: {
    marginTop: theme.spacing(5),
  },
}));

export default SideNav;
