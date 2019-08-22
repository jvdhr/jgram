import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  SunnyIcon,
  CloudyIcon,
  DateIcon,
  ChooseDateIcon
} from "../../icons/Icons";
import useStyles from "../../_styles/home-page-styles/ExploreEvents";

function ExploreEvents() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        جستجوی رویدادها
      </Typography>
      <Grid container spacing={1} className={classes.ExploreEvents}>
        <Grid item xs={6} className={`${classes.box} ${classes.today}`}>
          <SunnyIcon />
          امروز
        </Grid>
        <Grid item xs={6} className={`${classes.box} ${classes.tomorrow}`}>
          <CloudyIcon />
          فردا
        </Grid>
        <Grid item xs={6} className={`${classes.box} ${classes.week}`}>
          <DateIcon />
          این هفته
        </Grid>
        <Grid item xs={6} className={`${classes.box} ${classes.date}`}>
          <ChooseDateIcon />
          انتخاب تاریخ
        </Grid>
      </Grid>
    </div>
  );
}

export default ExploreEvents;
