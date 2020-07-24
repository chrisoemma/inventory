import React, {useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AllNav from "../navigations/AllNav";

//import Button from "@material-ui/core/Button";
//import { Formik } from "formik";
//import * as yup from "yup";
import MaterialTable from "material-table";

import axios from 'axios';

const Vendor = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [vendor, setVendor] = React.useState({

    columns: [
	  { title: "Vendor Name", field: "name" },
	  { title: "Email", field: "email" },
	  { title: "Phone", field: "phone" },

      {
        title: "Location",
        field: "locationId",
        lookup: { 34: "Kibaha", 63: "Mkuranga", 74: "Kigoma" },
      },
    ],
    data: [
      { name: "John Cheo", email:"john@gmail.com",phone:"078923456",  locationId: 74 },
      { name: "Frank Cheo", email:"frank@gmail.com",phone:"068903456",  locationId: 34 },
    ],
  });


  useEffect(()=>{

    axios.get("/api/v1/expenses")

    .then(resp=>{
      //setExpense(data:resp.data.data);
      //alert(resp.data.data[0].name);
    })
    .catch(error=>{
      console.log(error);
    })
  })

  return (
    <div className={classes.root}>
      <AllNav />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            {/* Chart */}
            <Grid item xs={12} md={10} lg={9}>
              <Paper className={fixedHeightPaper}>
                <div style={{ maxWidth: "100%" }}>
                  <MaterialTable
                    title="Vendors"
                    columns={vendor.columns}
                    data={vendor.data}
                    editable={{
                      onRowAdd: (newData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            setVendor((prevState) => {
                              const data = [...prevState.data];
                              data.push(newData);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            if (oldData) {
                              setVendor((prevState) => {
                                const data = [...prevState.data];
                                data[data.indexOf(oldData)] = newData;
                                return { ...prevState, data };
                              });
                            }
                          }, 600);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            setVendor((prevState) => {
                              const data = [...prevState.data];
                              data.splice(data.indexOf(oldData), 1);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                    }}
                  />
                </div>
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

export default Vendor;