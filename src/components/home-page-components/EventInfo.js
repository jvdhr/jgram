import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  LocationIcon,
  DateIcon,
  TimeIcon,
  WeatherIcon
} from "../../icons/Icons";
import moment from "moment-jalaali";
import useStyles from "../../_styles/home-page-styles/EventInfo";

moment.loadPersian({
  dialect: "persian-modern",
  usePersianDigits: true
});

export default function EventInfo(props) {
  const { event } = props;
  const classes = useStyles();
  return (
    <Grid
      className={classes.EventInfo}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={3}>
        <div className={classes.label}>
          <LocationIcon className={classes.iconSize} />
          <div className={classes.title}>شهر</div>
        </div>
        <div className={classes.value}>{event.location.city}</div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.label}>
          <DateIcon htmlColor="#E90547" className={classes.iconSize} />
          <div className={classes.title}>تاریخ</div>
        </div>
        <div className={classes.value}>
          {moment(event.dateTime[0]).format("jD jMMMM jYY")}
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.label}>
          <TimeIcon className={classes.iconSize} />
          <div className={classes.title}>ساعت</div>
        </div>
        <div className={classes.value}>
          {moment(event.dateTime[0]).format("HH:mm")}
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.label}>
          <WeatherIcon htmlColor="#E90547" className={classes.iconSize} />
          <div className={classes.title}>هوا</div>
        </div>
        <div className={classes.value}>Clear</div>
      </Grid>
    </Grid>
  );
}
