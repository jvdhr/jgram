import React from "react";
import Grid from "@material-ui/core/Grid";
import { TimeIcon } from "../../icons/Icons";
import moment from "moment-jalaali";
import useStyles from "../../_styles/event-details-styles/RemainingTime";

export default function RemainingTime(props) {
  const { dateTime } = props;
  const now = moment();
  const duration = moment.duration(moment(dateTime[0]).diff(now));
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <TimeIcon className={classes.iconSize} />
        <h4>زمان باقی‎مانده</h4>
      </div>
      <Grid
        className={classes.EventAttendance}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {moment(dateTime[0]) < moment() ? (
          <Grid item xs={12} className={classes.label}>
            <p>زمان رویداد تموم شد!</p>
          </Grid>
        ) : (
          <>
            <Grid item xs={4}>
              <div className={classes.label}>
                <div className={classes.title}>
                  {moment(dateTime[0]).diff(now, "days")}
                </div>
              </div>
              <div className={classes.value}>روز</div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.label}>
                <div className={classes.title}>{duration.hours()}</div>
              </div>
              <div className={classes.value}>ساعت</div>
            </Grid>
            <div item xs={4}>
              <div className={classes.label}>
                <div className={classes.title}>{duration.minutes()}</div>
              </div>
              <div className={classes.value}>دقیقه</div>
            </div>
          </>
        )}
      </Grid>
    </>
  );
}
