import React, { useEffect, useState } from "react";
import { getWeatherForecast, getWeatherIcon } from "../../_helpers/weather";
import moment from "moment-jalaali";
import WeatherCardView from "./WeatherCardView";

export default function WeatherCard(props) {
  const { city } = props;
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getWeatherForecast(city).then(res => {
      const { data } = res;
      setInfo({
        city: city,
        temp: data.data[0].temp.toFixed(0),
        min: data.data[0].min_temp.toFixed(0),
        max: data.data[0].max_temp.toFixed(0),
        humidity: data.data[0].rh,
        icon: getWeatherIcon(data.data[0].weather.code),
        day: moment().format("dddd"),
        date: moment().format("jYYYY/jMM/jD")
      });
    });
  }, [city]);

  const jsx = info ? <WeatherCardView info={info} /> : null;

  return jsx;
}
