import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AllNav from "../navigations/AllNav";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as yup from "yup";


const expenseSchema = yup.object({
  expenseName: yup
    .string()
    .required("Expense Name is required"),
    expenseCategory: yup
    .string()
    .required("Expense Category is required"),
});

const Expense = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
                <div className={classes.upperContent}>
                  <h4>Expense</h4>
                  <Button size="large" color="primary" size="small">
                    Expenses
                  </Button>
                </div>

                
                <Formik 
                className={classes.root} 
                autoComplete="off"
                validationSchema={expenseSchema}
                initialValues={{ expenseName:'', expenseCategory:''}}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                 
      
                 
      
                }}

                >

{(props) => (
                  <Grid container>
                    <Grid item sm={6}>
                      <TextField
                        type="text"
                        name="expenseName"
                        id="standard-basic"
                        label="Expense name"
                        fullWidth={true}
                        onChange={props.handleChange("expenseName")}
                        onBlur={props.handleBlur("expenseName")}
                        value={props.values.expenseName}
                      
                       
                      />
                     <div style={{color:'red'}}> {
                          props.touched.expenseName && props.errors.expenseName
                        }
                     </div> 
                    </Grid>

                    <Grid item sm={4}>
                      <FormControl
                        className={classes.formControl}
                        fullWidth={true}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                        
                          onChange={props.handleChange("expenseCategory")}
                          onBlur={props.handleBlur("expenseCategory")}
                          value={props.values.expenseCategory}
                          
                        

                        >
                          <MenuItem value={10}>Stationary</MenuItem>
                          <MenuItem value={20}>Production</MenuItem>
                          <MenuItem value={30}>Bottles</MenuItem>
                        </Select>
                        <div style={{color:'red'}}>{
                          props.touched.expenseCategory && props.errors.expenseCategory
                        }
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid sm={2} />
                    <Grid sm={10} />
                    <Grid sm={2}>
                      <div className={classes.btnSave}>
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.btn}
                          type="submit"
                          onClick={()=>props.handleSubmit()}
                        >
                          Save
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                     )}
                </Formik>
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
    height: 240,
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
  btnSave: {
    marginTop: theme.spacing(4),
  },
}));

export default Expense;
