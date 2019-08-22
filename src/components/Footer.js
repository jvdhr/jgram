import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import useStyles from "../_styles/Footer";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"کپی‎رایت © "}
      {new Date().getFullYear()}
      {". ساخته شده با "}❤ و مقدار زیادی ☕
    </Typography>
  );
};

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.nav}>
          <Link className={classes.link} to="/about">
            درباره ما
          </Link>
          <Link className={classes.link} to="/contact">
            تماس با ما
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.copyright}>
          <Copyright />
        </Grid>
      </Grid>
    </footer>
  );
}
