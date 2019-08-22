import React from "react";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useStyles from "../_styles/ContactUs";

export default function ContactUs() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="sm" className={classes.root}>
        <Typography variant="h4">با تیم متخصصین ما در ارتباط باشید</Typography>
        <p>سوالی دارید؟ متخصصان ما به شما کمک می‎کنند.</p>

        <form>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="نام"
                margin="normal"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="آدرس ایمیل"
                type="email"
                margin="normal"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="شرکت"
                margin="normal"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="موضوع"
                margin="normal"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="چه کاری می‎تونیم براتون انجام بدیم؟"
                multiline
                rows="7"
                maxrows="7"
                margin="normal"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
                required
              />
            </Grid>
            <Button variant="contained" color="secondary" fullWidth>
              ارسال پیام
            </Button>
          </Grid>
        </form>
      </Container>
      <Footer />
    </>
  );
}
