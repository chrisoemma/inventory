import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AllNav from "../navigations/AllNav";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import NoteIcon from "@material-ui/icons/Note";
import ClearIcon from "@material-ui/icons/Clear";
const CoconutDrawer = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={12} lg={11}>
              <Paper className={fixedHeightPaper}>
                <Grid container style={{ marginBottom: 10, padding: 5 }}>
                  <Grid tem xs={12} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <Button color="default">
                          {" "}
                          <NoteIcon /> New{" "}
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Button color="default">
                          <ClearIcon /> Deactivate
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4} />
                      <Grid item xs={12} sm={3}>
                        <Button color="default"> Cancel </Button>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          disabled
                          id="standard-disabled"
                          label="Category type"
                          defaultValue="Coconuts"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          disabled
                          id="standard-disabled"
                          label="#"
                          defaultValue="CSN0001"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextareaAutosize
                          aria-label="minimum height"
                          rowsMin={8}
                          placeholder="Details"
                          style={{ width: 400 }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={require("../images/coconut.jpg")}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            style={{ color: "#684632" }}
                            align="center"
                          >
                            + change image
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing={4} style={{ paddingTop: 20 }}>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.pricing}>
                      <Typography variant="h6">Pricing & Cost</Typography>
                      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                      <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                          <Typography>Normal price</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="standard-basic"
                            style={{ backgroundColor: "#fff" }}
                            defaultValue="Tsh0.00"
                            required
                            inputProps={{
                              min: 0,
                              style: { textAlign: "center" },
                            }}
                          />
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        spacing={5}
                        style={{ backgroundColor: "#dcddde", marginTop: 40 }}
                      >
                        <Grid item xs={12} sm={6}>
                          <Typography>Cost</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="standard-basic"
                            style={{ backgroundColor: "#fff" }}
                            defaultValue="Tsh0.00"
                            size="small"
                            inputProps={{
                              min: 0,
                              style: { textAlign: "center" },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.quantity}>
                      <Typography variant="h7">Quantity on hand</Typography>
                      <Typography variant="h4">0</Typography>
                      <Divider
                        style={{
                          backgroundColor: "#fff",
                          marginTop: 5,
                          marginBottom: 10,
                        }}
                      />

                      <Grid container spacing={5} style={{ marginTop: 38 }}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="h6">Location</Typography>
                          <Typography variant="h7">Default Location</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Grid container>
                            <Grid item xs={4} sm={4}>
                              <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                              >
                                <Typography>-</Typography>
                              </Button>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                              <TextField
                                id="standard-basic"
                                style={{ backgroundColor: "#fff" }}
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue="0"
                              />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                              <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                              >
                                <Typography>+</Typography>
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
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
  formRoot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
  pricing: {
    backgroundColor: "#edeff0",
    padding: theme.spacing(2),
  },

  quantity: {
    backgroundColor: "#684632",
    padding: theme.spacing(2),
    color: "#fff",
  },
  media: {
    height: 140,
  },
}));

export default CoconutDrawer;
