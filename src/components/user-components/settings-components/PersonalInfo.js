import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import useInputState from "../../../_hooks/useInputState";
import { startEditUser } from "../../../_actions/userActions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../../../_styles/user-styles/settings-styles/PersonalInfo";
import renderPostEventSnackbar from "../../composite/snackbar";

function PersonalInfo(props) {
  const { currentViewer, startEditUser, logIn } = props;
  const classes = useStyles();

  const [firstName, setFirstName] = useInputState(currentViewer.firstName);
  const [lastName, setLastName] = useInputState(currentViewer.lastName);
  const [phone, setPhone] = useInputState(currentViewer.phone);
  const [city, setCity] = useInputState(currentViewer.location.city);
  const [bio, setBio] = useInputState(currentViewer.bio);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleFormSubmit = e => {
    e.preventDefault();
    const updates = {
      firstName,
      lastName,
      phone,
      location: {
        ...currentViewer.location,
        city: city
      },
      bio
    };

    setSnackbarOpen(true);
    // EDIT USER INFO
    startEditUser(currentViewer.uid, updates)
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 2500);
      })
      .catch(e => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setSnackbarOpen(false);
          setIsLoading(true);
          setIsSuccess(true);
        }, 5000);
      });
  };

  return (
    <Fragment>
      <ValidatorForm noValidate onSubmit={handleFormSubmit}>
        <Card className={classes.card}>
          <div className={classes.label}>
            <h4>اطلاعات شخصی</h4>
          </div>
          <Divider />
          <Grid container className={classes.container} spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label="نام"
                variant="outlined"
                required
                fullWidth
                value={firstName}
                onChange={setFirstName}
                validators={["required"]}
                errorMessages={["این فیلد نباید خالی باشه!"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="نام خانوادگی"
                value={lastName}
                onChange={setLastName}
                validators={["required"]}
                errorMessages={["این فیلد نباید خالی باشه!"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="phone"
                variant="outlined"
                fullWidth
                id="phone"
                label="تلفن همراه"
                type="tel"
                value={phone}
                onChange={setPhone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="شهر"
                type="text"
                value={city}
                onChange={setCity}
                validators={["required"]}
                errorMessages={["این فیلد نباید خالی باشه!"]}
              />
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.card}>
          <div className={classes.label}>
            <h4>توضیحات</h4>
          </div>
          <Divider />
          <div className={classes.container}>
            <TextValidator
              label="کمی درباره خودتون بنویسید"
              multiline
              rows="4"
              placeholder="توضیحات..."
              variant="outlined"
              fullWidth
              value={bio}
              onChange={setBio}
            />
          </div>
        </Card>

        <Button variant="contained" color="secondary" type="submit">
          ذخیره تغییرات
        </Button>
      </ValidatorForm>
      {renderPostEventSnackbar(snackbarOpen, isSuccess, isLoading, "editInfo")}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.authRedux
});

const mapDispatchToProps = dispatch => ({
  startEditUser: (id, updates) => dispatch(startEditUser(id, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);
