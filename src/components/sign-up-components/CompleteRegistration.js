import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useInputState from "../../_hooks/useInputState";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import useStyles from "../../_styles/sign-up-styles/CompleteRegistration";

export default function CompleteRegistration(props) {
  const classes = useStyles();
  const { onCompleteSubmit } = props;
  const [firstName, setFirstName] = useInputState("");
  const [lastName, setLastName] = useInputState("");
  const [phone, setPhone] = useInputState("");
  const [city, setCity] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      phone,
      location: {
        city: city
      }
    };
    onCompleteSubmit(user);
  };

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
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="نام"
              value={firstName}
              onChange={setFirstName}
              autoFocus
              validators={["required"]}
              errorMessages={["لطفا نام‎تون رو وارد کنید."]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="نام خانوادگی"
              name="lastName"
              autoComplete="lname"
              value={lastName}
              onChange={setLastName}
              validators={["required"]}
              errorMessages={["لطفا نام خانوادگی‎تون رو وارد کنید."]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="تلفن همراه"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={setPhone}
              validators={["required"]}
              errorMessages={["لطفا شماره تلفن همراه‎تون رو وارد کنید."]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
              required
              fullWidth
              name="city"
              label="محل زندگی"
              id="city"
              autoComplete="address-level2"
              value={city}
              onChange={setCity}
              validators={["required"]}
              errorMessages={["لطفا شهر محل زندگی‎تون رو وارد کنید."]}
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
          تکمیل ثبت نام
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
