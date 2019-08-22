import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "../_styles/NoAccess";

export default function NoAccess(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.loginMessage} ${classes.root}`}>
      <Box my={2}>
        <Typography component="p">
          برای مشاهده محتوای این صفحه ابتدا باید وارد شوید.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.history.push("/signin")}
      >
        ورود
      </Button>
    </div>
  );
}
