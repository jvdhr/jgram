import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Drop, MaxTemp, MinTemp } from "../../icons/Icons";
import "../../_styles/home-page-styles/GenericWeather.css";
import useStyles from "../../_styles/home-page-styles/WeatherCardView";

export default function WeatherCardView({ info }) {
  const classes = useStyles();

  return (
    <Card className={`weather-card ${classes.root}`}>
      <Grid container>
        <Grid item xs={12}>
          <h1>{info.city}</h1>
        </Grid>
        <Grid item xs={5} className="info-container">
          <p>{info.day}</p>
          <p>{info.date}</p>
          <div className="humidity-container">
            <p>{info.humidity}%</p>
            <Drop className="small-icon" />
          </div>
        </Grid>
        <Grid item xs={7} className="svg-container">
          {info.icon}
        </Grid>
        <Grid item xs={6} className="info-container">
          <div className="humidity-container">
            <p>{info.max}</p>
            <MaxTemp className="small-icon" />
            <p>{info.min}</p>
            <MinTemp className="small-icon" />
          </div>
        </Grid>
        <Grid item xs={6} className="temp-container">
          <h1>{info.temp}&deg;</h1>
        </Grid>
      </Grid>
    </Card>
  );
}
