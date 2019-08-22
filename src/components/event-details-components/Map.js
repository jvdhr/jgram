import React, { useEffect } from "react";
import useStyles from "../../_styles/event-details-styles/Map";

export default function Map(props) {
  const { location } = props;
  const classes = useStyles();

  useEffect(() => {
    const app = new window.Mapp({
      element: "#map",
      presets: {
        latlng: {
          lat: location.latlng.lat,
          lng: location.latlng.lng
        },
        zoom: 15,
        apiKey:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI2N2JhMzA1ODA5NDg2YmMwN2E1MzM5YjE0OWMwMDY2N2FmNWJmZGJjNDI2YzJmZWRhMmE5OGQwYjZlYTllYTc1MThmMjlmYTQ3YmZlNjEzIn0.eyJhdWQiOiI1MjY5IiwianRpIjoiMjY3YmEzMDU4MDk0ODZiYzA3YTUzMzliMTQ5YzAwNjY3YWY1YmZkYmM0MjZjMmZlZGEyYTk4ZDBiNmVhOWVhNzUxOGYyOWZhNDdiZmU2MTMiLCJpYXQiOjE1NjU1NDc2NTQsIm5iZiI6MTU2NTU0NzY1NCwiZXhwIjoxNTY4MjI2MDUzLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.UstEPVMjDMvFPTGjHGOaFxKNH6twvY6IjfOnAnN7L38wIjghF11tjRSQI1dEM9F5KHpoUUwXT5M_RSBUBhQ028F9Fyw3jC6KX1MFWpt_GlLAenyHbB3tyJG0Vo2gdG8PdzfQkv_SKw6BIAMezm_EFd5eBpP7KSwGUEMcfe-_zjFD0U9iTfuoqXvgpAuKwPzvgfNLkLgkY_lk_Wu6llh7npkeY_eho8naZ9eYibDDfLNy5Zc3V2_asnYP0keiA9bUkn3pSDocG8yuDsPsKfoPEiT9vg3lS2U2_ujIOz9UHbl6PN-trL88uFTuhhLZzfZjL5agITUjQMlsf4JejqhIVQ"
      }
    });
    app.addLayers({
      base: {
        default: {
          server: "https://map.ir/shiveh",
          layers: "Shiveh:Shiveh",
          format: "image/png",
          i18n: "custom-baselayer-1"
        }
      },
      over: {}
    });

    app.markReverseGeocode({
      state: {
        latlng: {
          lat: location.latlng.lat,
          lng: location.latlng.lng
        },
        zoom: 15
      }
    });
  }, []);
  return <div className={classes.map} id="map" />;
}
