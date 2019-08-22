import React from "react";
import axios from "axios";
import {
  ThunderStormWithRain,
  ThunderStorm,
  Drizzle,
  Rain,
  HeavyRain,
  LightSnow,
  Snow,
  Sleet,
  Fog,
  Clear,
  FewClouds,
  MoreClouds,
  Overcast
} from "../icons/Icons";

export const getWeatherForecast = city => {
  return axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=IR&days=7&key=e5b4e7265aa84a97afc2784410d0a011`
  );
};

export const getWeatherIcon = code => {
  switch (code) {
    case 200 || 201 || 202 /* Thunderstorm with rain */:
      return <ThunderStormWithRain />;
    case 230 || 231 || 232 || 233 /* Thunderstorm with drizzle */:
      return <ThunderStorm />;
    case 300 || 301 || 302 /* Drizzle */:
      return <Drizzle />;
    case 500 || 501 || 511 || 520 /* Rain */:
      return <Rain />;
    case 502 /* "Heavy rain" */:
      return <HeavyRain />;
    case 600 || 610 || 621 /* Light snow */:
      return <LightSnow />;
    case 601 || 602 || 622 || 623 /* Snow */:
      return <Snow />;
    case 611 || 612 /* Sleet */:
      return <Sleet />;
    case 700 || 711 || 721 || 731 || 741 || 751 /* Fog */:
      return <Fog />;
    case 800 /* Clear */:
      return <Clear />;
    case 801 || 802 /* Few clouds */:
      return <FewClouds />;
    case 803 /* More clouds */:
      return <MoreClouds />;
    case 804 /* Overcast */:
      return <Overcast />;
    default:
      return null;
  }
};
