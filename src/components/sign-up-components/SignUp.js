import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import useInputState from "../../_hooks/useInputState";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useStyles from "../../_styles/sign-up-styles/SignUp";

function SignUp(props) {
  const classes = useStyles();
  const { onRegisterSubmit } = props;
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");
  const [repeatPassword, setRepeatPassword] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    onRegisterSubmit(user);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== password) {
        return false;
      }
      return true;
    });

    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password, repeatPassword]);

  return (
    <>
      <ValidatorForm
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
              required
              fullWidth
              name="email"
              label="ایمیل"
              id="email"
              autoComplete="email"
              value={email}
              onChange={setEmail}
              validators={["required", "isEmail"]}
              errorMessages={[
                "لطفا ایمیل‎تون رو وارد کنید.",
                "ایمیل معتبر نیست."
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
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
              errorMessages={["لطفا گذرواژه رو وارد کنید."]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
              required
              fullWidth
              name="password-repeat"
              label="تکرار گذرواژه"
              type="password"
              id="password-repeat"
              value={repeatPassword}
              onChange={setRepeatPassword}
              validators={["required", "isPasswordMatch"]}
              errorMessages={[
                "لطفا گذرواژه رو دوباره وارد کنید.",
                "گذرواژه یکسان نیست!"
              ]}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          ادامه
        </Button>
      </ValidatorForm>

      <Grid container justify="flex-start">
        <Grid item>
          <Link to="/signin" variant="body2">
            حساب کاربری دارید؟ ورود
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default withRouter(SignUp);
