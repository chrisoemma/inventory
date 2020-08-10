import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AllNav from "../navigations/AllNav";
//import Alert from "@material-ui/lab/Alert";
//import { Typography } from '@material-ui/core';
import MaterialTable from "material-table";
import CoconutDrawer from "./CoconutDrawer";



const CoconutLit = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [coconutDrawer,setCoconutDrawer] = React.useState(false);

  return (
    <div className={classes.root}>
      <AllNav />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <MaterialTable
                  title="Coconuts Stocks"
                  columns={[
                    { title: "Number", field: "no" },
                    { title: "CSN", field: "csn", type: "numeric" },
                    {
                      title: "Quantiy",
                      field: "quantity",
                    },

                    {
                      title: "Used ",
                      field: "used",
                    },

                    {
                      title: "Spoiled ",
                      field: "spoiled",
					},
					 {
						title: "Remaning",
						field: "remaning",
					  },

                    {
                      title: "Price",
                      field: "price",
                    },
                    {
                      title: "Cost",
                      field: "cost",
                    },
                  ]}
                  data={[
                    {
                      no: 1,
                      csn: "0001",
					  quantity: 20000,
					  spoiled:5000,
					  used:5000,
					  remaning:300,
                      price: 2000000,
                      cost: 50000,
                    },
                    {
                      no: 2,
                      csn: "0001",
					  quantity: 50000,
					  spoiled:5000,
					  used:5000,
					  remaning:300,
                      price: 4500000,
                      cost: 60000,
                    },
                  ]}
				  onRowClick={(evt, selectedRow) =>
					{
					setSelectedRow(selectedRow.tableData.id)
				
					
					}
                  }
                  options={{
                    headerStyle: {
                      backgroundColor: "#684632",
                      color: "#FFF",
                    },
                    actionsColumnIndex: -1,
                    rowStyle: (rowData) => ({
                      backgroundColor:
                        selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
                    }),
                  }}
                  actions={[
                    {
                      icon: "timeline",
                      tooltip: "Spoiled Coconuts",
                    },
                    (rowData) => ({
                      icon: "iso",
                      tooltip: "Used coconuts",

                      disabled: rowData.birthYear < 2000,
                    }),
                  ]}
                />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>{/* <Copyright /> */}</Box>
        </Container>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "100%",
  },

  upperContent: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 20,
  },
  formControl: {
    marginLeft: theme.spacing(10),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default CoconutLit;
