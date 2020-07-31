import React, {useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AllNav from "../navigations/AllNav";
import Alert from "@material-ui/lab/Alert";

//import Button from "@material-ui/core/Button";
//import { Formik } from "formik";
//import * as yup from "yup";
import MaterialTable from "material-table";

import axios from 'axios';

const Expense = () => {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [data, setData] = React.useState([]);
  const [selectData, setSelectData] = React.useState([]);
  const [iserror, setIserror] = React.useState(false)
  const [errorMessages, setErrorMessages] = React.useState([])


  var obj = selectData.reduce(function(acc, cur, i) {
    acc[cur.id] = cur.name;

    return acc;
  }, {});

  let columns = [

       {title: "id", field: "id", hidden: true},
       { title: "Expense", field: "name" },
        {
          title: "Expense Category",
          field: "expenseCategoryId",
          lookup:obj,
        },
      ]

  useEffect(()=>{

    axios.get("/api/v1/expenses")
    .then(resp=>{
      setData(resp.data.data);
    
    })
    .catch(error=>{
      setErrorMessages(["Cannot load user data"]);
      setIserror(true);
    })

    axios.get("/api/v1/expense_categories")
    .then(resp=>{
      setSelectData(resp.data.data);
    
    })
    .catch(error=>{
      setErrorMessages(["Cannot load user data"]);
      setIserror(true);
    })

  },[]);


  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
    if(newData.name === ""){
      errorList.push("Please enter  name")
    }

  

    if(errorList.length < 1){

      axios.patch("/api/v1/expenses/update_expense/"+newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData(dataUpdate);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
    
  }



  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = [];
    if (newData.name === undefined) {
      errorList.push("Please enter Expense Name");
    }

    if (errorList.length < 1) {
      //no error
      axios
        .post("/api/v1/expenses/new_expense", newData)
        .then((res) => {
          setData([...data, newData]);
          resolve();
          setErrorMessages([]);
          setIserror(false);
        })
        .catch((error) => {
          setErrorMessages(["Cannot add data. Server error!"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  const handleRowDelete = (oldData, resolve) => {
    axios
      .delete("/api/v1/expenses/delete_expense/" + oldData.id)
      .then((res) => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve();
      })
      .catch((error) => {
        setErrorMessages(["Delete failed! Server error"]);
        setIserror(true);
        resolve();
      });
  };

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
                  <div>
                  {iserror && (
                      <Alert severity="error">
                        {errorMessages.map((msg, i) => {
                          return <div key={i}>{msg}</div>;
                        })}
                      </Alert>
                    )}
                  </div>

                  <MaterialTable
                    title="Payment Method"
                    columns={columns}
                    data={data}
                    editable={{

                      onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                          handleRowUpdate(newData, oldData, resolve);   
                      }),
                      onRowAdd: (newData) =>
                        new Promise((resolve) => {
                          handleRowAdd(newData, resolve);
                        }),
                  
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          handleRowDelete(oldData, resolve);
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

export default Expense;
