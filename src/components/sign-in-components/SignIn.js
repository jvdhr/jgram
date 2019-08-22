import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link, withRouter } from "react-router-dom";
import useInputState from "../../_hooks/useInputState";
import useStyles from "../../_styles/sign-in-styles/SignIn";

function SignIn(props) {
  const { onSubmitForm } = props;
  const classes = useStyles();
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    onSubmitForm(user);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={7} className={classes.image} />
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          <ValidatorForm
            // ref="form"
            noValidate
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={setEmail}
              validators={["required", "isEmail"]}
              errorMessages={[
                "لطفا ایمیل‎تون رو وارد کنید!",
                "ایمیل معتبر نیست!"
              ]}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="گذرواژه"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={setPassword}
              validators={["required"]}
              errorMessages={["گذرواژه‎تون رو وارد کنید!"]}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  فراموشی گذرواژه
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"حساب کاربری ندارید؟ ثبت نام"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5} />
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignIn);
