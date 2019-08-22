import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import { DateIcon } from "../../icons/Icons";
import { TextValidator } from "react-material-ui-form-validator";
import useStyles from "../../_styles/add-new-event-styles/NewEventDetails";

function NewEventDetails(props) {
  const {
    dateTimeChips,
    setDateTimeChips,
    handleDateTimeDelete,
    city,
    setCity,
    address,
    setAddress,
    latlng,
    setLatlng,
    snackbarOpen
  } = props;
  const classes = useStyles();

  const [dateTime, setDateTime] = useState(moment());

  const handleAddDate = e => {
    e.preventDefault();
    setDateTimeChips([...dateTimeChips, dateTime.format()]);
  };

  const setLocation = latlng => {
    setLatlng(latlng);
  };

  useEffect(() => {
    var app = new window.Mapp({
      element: "#map",
      presets: {
        latlng: {
          lat: 37.27924339941096,
          lng: 49.58423852920532
        },
        zoom: 11,
        apiKey:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI2N2JhMzA1ODA5NDg2YmMwN2E1MzM5YjE0OWMwMDY2N2FmNWJmZGJjNDI2YzJmZWRhMmE5OGQwYjZlYTllYTc1MThmMjlmYTQ3YmZlNjEzIn0.eyJhdWQiOiI1MjY5IiwianRpIjoiMjY3YmEzMDU4MDk0ODZiYzA3YTUzMzliMTQ5YzAwNjY3YWY1YmZkYmM0MjZjMmZlZGEyYTk4ZDBiNmVhOWVhNzUxOGYyOWZhNDdiZmU2MTMiLCJpYXQiOjE1NjU1NDc2NTQsIm5iZiI6MTU2NTU0NzY1NCwiZXhwIjoxNTY4MjI2MDUzLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.UstEPVMjDMvFPTGjHGOaFxKNH6twvY6IjfOnAnN7L38wIjghF11tjRSQI1dEM9F5KHpoUUwXT5M_RSBUBhQ028F9Fyw3jC6KX1MFWpt_GlLAenyHbB3tyJG0Vo2gdG8PdzfQkv_SKw6BIAMezm_EFd5eBpP7KSwGUEMcfe-_zjFD0U9iTfuoqXvgpAuKwPzvgfNLkLgkY_lk_Wu6llh7npkeY_eho8naZ9eYibDDfLNy5Zc3V2_asnYP0keiA9bUkn3pSDocG8yuDsPsKfoPEiT9vg3lS2U2_ujIOz9UHbl6PN-trL88uFTuhhLZzfZjL5agITUjQMlsf4JejqhIVQ"
      }
    });

    app.addFullscreen();
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

    app.addMarker({
      name: "advanced-marker",
      latlng: latlng,
      icon: app.icons.red,
      popup: {
        title: {},
        description: {
          i18n: "مکان ذخیره شد!"
        },
        open: false
      },
      pan: true,
      draggable: true,
      history: false,
      on: {
        click: () => {
          setLocation(app.states.current.latlng);
        }
      }
    });

    return () => {
      app.removeMarker({
        name: "advanced-marker"
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box className={classes.box}>
      <div className={classes.label}>
        <DateIcon htmlColor="rgb(233, 5, 71)" className={classes.iconSize} />
        <h4>جزئیات رویداد</h4>
      </div>
      <Box className={classes.innerBox}>
        <div className={classes.addNewEventNameInner}>
          <h4>جستجوی شهر</h4>
        </div>
        <TextValidator
          placeholder="نام شهر را وارد کنید"
          className={`${classes.addNewEventTitle}`}
          variant="outlined"
          fullWidth
          value={city}
          onChange={setCity}
          validators={["required"]}
          errorMessages={["لطفا این فیلد رو پر کنید!"]}
          disabled={snackbarOpen}
        />
      </Box>

      <Box className={classes.innerBox}>
        <div className={classes.addNewEventNameInner}>
          <h4>آدرس</h4>
        </div>
        <TextValidator
          placeholder="آدرس محل برگزاری را بنویسید"
          className={`${classes.addNewEventTitle}`}
          variant="outlined"
          fullWidth
          value={address}
          onChange={setAddress}
          validators={["required"]}
          errorMessages={["لطفا این فیلد رو پر کنید!"]}
          disabled={snackbarOpen}
        />
      </Box>

      <Box className={classes.innerBox}>
        <div className={classes.addNewEventNameInner}>
          <h4>محل برگزاری</h4>
          <Typography variant="subtitle1" color="textSecondary">
            مکان مورد نظرتون رو انتخاب کنید و در انتها برای ذخیره روی مکان‎نما
            کلیک کنید.
          </Typography>
        </div>
        <div className={classes.map} id="map" />
      </Box>

      <Box className={classes.innerBox}>
        <div className={classes.addNewEventNameInner}>
          <h4>انتخاب تاریخ</h4>
        </div>
        <DatePicker
          className={`${classes.customInput} ${classes.addNewEventTitle}`}
          isGregorian={false}
          value={dateTime}
          onChange={value => setDateTime(value)}
        />
        <Button
          className={classes.addNewEventSubmit}
          variant="contained"
          color="secondary"
          onClick={handleAddDate}
        >
          افزودن تاریخ
        </Button>
        <div className={classes.chipPaper}>
          {dateTimeChips.map(data => {
            return (
              <Chip
                key={data}
                label={moment(data).format("HH:mm - jYY/jMM/jD")}
                onDelete={handleDateTimeDelete(data)}
                className={classes.chip}
              />
            );
          })}
        </div>
      </Box>
    </Box>
  );
}

export default NewEventDetails;
