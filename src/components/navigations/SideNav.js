import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Dashboard from '@material-ui/icons/Dashboard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { Divider } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import CodeIcon from '@material-ui/icons/Code';
import ShopIcon from '@material-ui/icons/Shop';
import ReportIcon from '@material-ui/icons/Report';

const SideNav =()=>{

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expOpen,setExpOpen]=React.useState(false);
  const [settingsOpen,setSettingsOpen]=React.useState(false);
  const [stockOpen,setStockOpen]=React.useState(false);
  const [salesOpen,setSalesOpen]=React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickExpense = ()=>{
	  setExpOpen(!expOpen);
  }

  const settingsHandleClick = ()=>{
	setSettingsOpen(!settingsOpen);
}

const stockHandleClick = ()=>{
	setStockOpen(!stockOpen);
}

const salesHandleClick = ()=>{

	setSalesOpen(!salesOpen);
}


	return ( <List
		component="nav"
		aria-labelledby="nested-list-subheader"
		subheader={
		  <ListSubheader component="div" id="nested-list-subheader">
			
		  </ListSubheader>
		}
		className={classes.root}
	  >
		<ListItem button>
		  <ListItemIcon>
			<Dashboard />
		  </ListItemIcon>
		  <ListItemText primary="Dashboard" />
		</ListItem>

		<ListItem button onClick={stockHandleClick}>
		  <ListItemIcon>
			<InboxIcon />
		  </ListItemIcon>
		  <ListItemText primary="Stock Tracking" />
		  {stockOpen ? <ExpandLess /> : <ExpandMore />}
		</ListItem>

		<Collapse in={stockOpen} timeout="auto" unmountOnExit>
		  <List disablePadding>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText secondary="New coconuts" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText secondary="Used coconuts" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<AccessibilityNewIcon />
			  </ListItemIcon>
			  <ListItemText secondary="Spoiled coconuts" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<PaymentIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Oil obtained" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<PaymentIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Spoiled Oil" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<CodeIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Clean oil" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<ShopIcon/>
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
			  <ListItemText secondary="Sales officer" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText secondary="Daily sales" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<AccessibilityNewIcon />
			  </ListItemIcon>
			  <ListItemText secondary="Vendors" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<PaymentIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Shop outlets" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<PaymentIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Spoiled Oil" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<CodeIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Clean oil" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<ShopIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="packeged oil" />
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
			  <ListItemText secondary="New" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText secondary="Previous"/>
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
			  <ListItemText primary="Starred" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText primary="UnStarred" />
			</ListItem>
		  </List>
		</Collapse>

		<Divider />


		<ListItem button onClick={settingsHandleClick} className={classes.settings}>
		  <ListItemIcon>
			<SettingsApplicationsIcon />
		  </ListItemIcon>
		  <ListItemText primary="Settings" />
		  {settingsOpen ? <ExpandLess /> : <ExpandMore />}
		</ListItem>

		<Collapse in={settingsOpen} timeout="auto" unmountOnExit>
		  <List disablePadding>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText secondary="Products" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<StarBorder />
			  </ListItemIcon>
			  <ListItemText secondary="Bottles" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<AccessibilityNewIcon />
			  </ListItemIcon>
			  <ListItemText secondary="Vendors" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<PaymentIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Payment method" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<PaymentIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Expenses" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<CodeIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Account codes" />
			</ListItem>
			<ListItem button className={classes.nested}>
			  <ListItemIcon>
				<ShopIcon/>
			  </ListItemIcon>
			  <ListItemText secondary="Outlets shops" />
			</ListItem>
		  </List>
		</Collapse>

	  </List>)

}



const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  maxWidth: 360,
	  backgroundColor: theme.palette.background.paper,
	},
	nested: {
	  paddingLeft: theme.spacing(4),
	 
	},
	settings:{
		marginTop:theme.spacing(5)
	}
  }));

export default SideNav