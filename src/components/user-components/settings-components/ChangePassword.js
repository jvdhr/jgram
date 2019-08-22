import React, { useState, useEffect, Fragment } from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import useInputState from "../../../_hooks/useInputState";
import { startUpdatePassword } from "../../../_actions/authActions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../../../_styles/user-styles/settings-styles/ChangePassword";
import renderPostEventSnackbar from "../../composite/snackbar";

function ChangePassword(props) {
  const { startUpdatePassword } = props;
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);
  const [email, setEmail] = useInputState("");
  const [oldPassword, setOldPassword] = useInputState("");
  const [password, setPassword] = useInputState("");
  const [repeatPassword, setRepeatPassword] = useInputState("");

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

  const handleFormSubmit = e => {
    setSnackbarOpen(true);
    e.preventDefault();
    startUpdatePassword(email, oldPassword, password)
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
            <h4>تغییر گذرواژه</h4>
          </div>
          <Divider />
          <div className={classes.container}>
            <label htmlFor="email">
              <h1>ایمیل</h1>
            </label>
            <TextValidator
              id="email"
              variant="outlined"
              type="email"
              required
              fullWidth
              value={email}
              onChange={setEmail}
              validators={["required", "isEmail"]}
              errorMessages={["این فیلد نباید خالی باشه!", "ایمیل معتبر نیست!"]}
            />
            <label htmlFor="old-password">
              <h1>گذرواژه قدیمی</h1>
            </label>
            <TextValidator
              id="old-password"
              variant="outlined"
              type="password"
              required
              fullWidth
              value={oldPassword}
              onChange={setOldPassword}
              validators={["required"]}
              errorMessages={["این فیلد نباید خالی باشه!"]}
            />
            <label htmlFor="new-password">
              <h1>گذرواژه جدید</h1>
            </label>
            <TextValidator
              id="new-password"
              variant="outlined"
              type="password"
              required
              fullWidth
              value={password}
              onChange={setPassword}
              validators={["required"]}
              errorMessages={["این فیلد نباید خالی باشه!"]}
            />
            <label htmlFor="new-password-repeat">
              <h1>گذرواژه تکرار جدید</h1>
            </label>
            <TextValidator
              id="new-password-repeat"
              variant="outlined"
              type="password"
              required
              fullWidth
              value={repeatPassword}
              onChange={setRepeatPassword}
              validators={["required", "isPasswordMatch"]}
              errorMessages={[
                "لطفا گذرواژه رو دوباره وارد کنید.",
                "گذرواژه یکسان نیست!"
              ]}
            />
          </div>
        </Card>

        <Button variant="contained" color="secondary" type="submit">
          بروزرسانی گذرواژه
        </Button>
      </ValidatorForm>
      {renderPostEventSnackbar(snackbarOpen, isSuccess, isLoading, "password")}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.currentViewer,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  startUpdatePassword: (email, oldPassword, password) =>
    dispatch(startUpdatePassword(email, oldPassword, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
