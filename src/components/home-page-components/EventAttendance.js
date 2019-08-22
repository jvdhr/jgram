import React from "react";
import Grid from "@material-ui/core/Grid";
import { GoingIcon, MaybeIcon, NotGoingIcon } from "../../icons/Icons";
import useStyles from "../../_styles/home-page-styles/EventAttendance";

export default function EventAttendance(props) {
  const { event } = props;
  const classes = useStyles();
  return (
    <Grid
      className={classes.EventAttendance}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={4}>
        <div className={classes.label}>
          <GoingIcon className={classes.iconSize} />
          <div className={classes.title}>می‎رم</div>
        </div>
        <div className={classes.value}>
          {event.going ? event.going.length : 0}
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.label}>
          <MaybeIcon className={classes.iconSize} />
          <div className={classes.title}>شاید برم</div>
        </div>
        <div className={classes.value}>
          {event.maybe ? event.maybe.length : 0}
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.label}>
          <NotGoingIcon className={classes.iconSize} />
          <div className={classes.title}>نمی‎رم</div>
        </div>
        <div className={classes.value}>
          {event.notGoing ? event.notGoing.length : 0}
        </div>
      </Grid>
    </Grid>
  );
}
