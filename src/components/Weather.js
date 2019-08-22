import React from "react";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh"
  }
}));

export default function Weather() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <h1>Weather page goes here</h1>
      </div>
      <Footer />
    </>
  );
}
