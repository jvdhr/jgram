import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../../_styles/snackbar";

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
};

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {variant === "info" ? (
            <FacebookProgress />
          ) : (
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
          )}
          {message}
        </span>
      }
      {...other}
    />
  );
}

function FacebookProgress(props) {
  const classes = useStyles();

  return (
    <div className={classes.fbRoot}>
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={24}
        thickness={4}
        {...props}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={24}
        thickness={4}
        {...props}
      />
    </div>
  );
}

export default function renderPostEventSnackbar(
  snackbarOpen,
  isSuccess,
  isLoading,
  variant
) {
  let success;
  let fail;
  let loading;

  switch (variant.toLowerCase()) {
    case "event":
      loading = "در حال بارگذاری رویداد...";
      success = "رویداد با موفقیت بارگذاری شد.";
      fail = "اشکالی در بارگذاری پیش اومد. لطفا دوباره تلاش کنید.";
      break;
    case "comment":
      loading = "در حال ارسال نظر...";
      success = "نظر با موفقیت ارسال شد.";
      fail = "مشکلی در ارسال نظر پیش اومد. لطفا دوباره تلاش کنید.";
      break;
    case "deleteevent":
      loading = "در حال حذف رویداد...";
      success = "رویداد با موفقیت حذف شد.";
      fail = "اشکالی در حذف رویداد پیش اومد. لطفا دوباره تلاش کنید.";
      break;
    case "signin":
      loading = "در حال ورود...";
      success = "";
      fail = "اشکالی در عملیات ورود پیش اومد. لطفا دوباره تلاش کنید.";
      break;
    case "signup":
      loading = "در حال انجام عملیات...";
      success = "ثبت نام با موفقیت انجام شد.";
      fail = "اشکالی در عملیات ثبت نام پیش اومد. لطفا دوباره تلاش کنید.";
      break;
    case "password":
      loading = "در حال تغییر گذرواژه...";
      success = "تغییر گذرواژه با موفقیت انجام شد.";
      fail = "اشکالی در تغییر گذرواژه اومد. لطفا دوباره تلاش کنید.";
      break;
    case "editInfo":
      loading = "در حال تغییر اطلاعات...";
      success = "اطلاعات با موفقیت به‎روزرسانی شدند.";
      fail = "اشکالی در به‎روزرسانی اطلاعات پیش اومد. لطفا دوباره تلاش کنید.";
      break;
    default:
      loading = "در حال انجام عملیات...";
      success = "عملیات با موفقیت انجام شد.";
      fail = "اشکالی در انجام عملیات پیش اومد. لطفا دوباره تلاش کنید.";
  }
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={snackbarOpen}
      autoHideDuration={isSuccess ? 1000 : null}
    >
      <MySnackbarContentWrapper
        variant={isLoading ? "info" : isSuccess ? "success" : "error"}
        message={isLoading ? loading : isSuccess ? success : fail}
      />
    </Snackbar>
  );
}
