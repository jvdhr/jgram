import React, { useState, useEffect, useRef } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import { withRouter } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../../_styles/home-page-styles/EventSearch";

function EventSearch(props) {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState(moment());
  const [labelWidth, setLabelWidth] = useState(0);
  const inputLabel = useRef(null);

  const handleChange = e => {
    setCity(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    props.history.push({
      pathname: "/search",
      state: { cat: category, city: city, text: "", date: date.format() }
    });
  };

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Card className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        رویدادهای اطراف شما
      </Typography>
      <ValidatorForm
        noValidate
        className="EventSearch-form"
        onSubmit={handleSearch}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              variant="outlined"
              className={`${classes.customInput} ${classes.addNewEventTitle}`}
            >
              <InputLabel ref={inputLabel} htmlFor="select-category">
                دسته‎بندی
              </InputLabel>
              <Select
                value={category}
                onChange={e => setCategory(e.target.value)}
                input={
                  <OutlinedInput
                    name="category"
                    labelWidth={labelWidth}
                    id="select-category"
                  />
                }
              >
                <MenuItem value="" />
                <MenuItem value={"music"}>موسیقی</MenuItem>
                <MenuItem value={"festival"}>جشنواره</MenuItem>
                <MenuItem value={"art"}>هنر</MenuItem>
                <MenuItem value={"sports"}>ورزشی</MenuItem>
                <MenuItem value={"concert"}>کنسرت</MenuItem>
                <MenuItem value={"comedy"}>کمدی</MenuItem>
                <MenuItem value={"promotions"}>تبلیغات</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextValidator
              label="شهر"
              type="search"
              className={classes.textField}
              variant="outlined"
              fullWidth
              value={city}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["لطفا شهر مورد نظرتون رو وارد کنید!"]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <DatePicker
              className={classes.datePicker}
              timePicker={false}
              isGregorian={false}
              value={date}
              onChange={value => setDate(value)}
              required
            />
          </Grid>
        </Grid>

        <span className={classes.button}>
          <Button
            className={classes.submit}
            variant="contained"
            color="secondary"
            type="submit"
          >
            جستجو
          </Button>
        </span>
      </ValidatorForm>
    </Card>
  );
}

export default withRouter(EventSearch);
