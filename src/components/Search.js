import React, { useEffect } from "react";
import EventCard from "./home-page-components/EventCard";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Footer from "./Footer";
import { SearchIcon } from "../icons/Icons";
import { connect } from "react-redux";
import {
  setCityFilter,
  setTextFilter,
  setCategoryFilter,
  setDateFilter
} from "../_actions/eventFiltersAction";
import getVisibleEvents from "../_selectors/events";
import { TextField } from "@material-ui/core";
import useStyles from "../_styles/Search";

function Search(props) {
  const {
    eventFilters,
    setCityFilter,
    setTextFilter,
    setCategoryFilter,
    setDateFilter,
    location
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (location.state) {
      setCityFilter(location.state.city);
      setCategoryFilter(location.state.cat);
      setDateFilter(location.state.date);
      setTextFilter(location.state.text);
    }

    return () => {
      setCityFilter("");
      setCategoryFilter("");
      setDateFilter(undefined);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="lg" className={classes.root}>
        <div className={classes.searchbarContainer}>
          <InputBase
            type="search"
            className={classes.searchbar}
            placeholder={`جستجوی رویداد...`}
            inputProps={{
              style: { padding: "5px 15px" }
            }}
            startAdornment={
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            }
            value={eventFilters.text}
            onChange={e => {
              setTextFilter(e.target.value);
            }}
          />
        </div>

        <div className="Search-filters">
          <Box display="flex" mb={2}>
            <Box flexGrow={1}>
              <FormControl>
                <InputLabel shrink htmlFor="age-label-placeholder">
                  دسته‎بندی
                </InputLabel>
                <Select
                  value={eventFilters.category}
                  onChange={e => {
                    setCategoryFilter(e.target.value);
                  }}
                  inputProps={{
                    name: "category",
                    id: "categories"
                  }}
                >
                  <MenuItem value={""}>همه دسته‎ها</MenuItem>
                  <MenuItem value={"music"}>موسیقی</MenuItem>
                  <MenuItem value={"festival"}>جشنواره</MenuItem>
                  <MenuItem value={"art"}>هنر</MenuItem>
                  <MenuItem value={"comedy"}>کمدی</MenuItem>
                  <MenuItem value={"sports"}>ورزشی</MenuItem>
                  <MenuItem value={"theater"}>تئاتر</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.provinceContainer}>
              <TextField
                placeholder="نام شهر را وارد کنید..."
                label="شهر"
                type="text"
                value={eventFilters.city}
                onChange={e => {
                  setCityFilter(e.target.value);
                }}
              />
            </Box>
          </Box>
        </div>

        <Grid container spacing={1} className="Search-filters">
          {props.events.map(event => {
            return (
              <Grid key={event.id} item xs={12} md={6}>
                <EventCard event={event} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setCityFilter: city => dispatch(setCityFilter(city)),
  setCategoryFilter: category => dispatch(setCategoryFilter(category)),
  setDateFilter: date => dispatch(setDateFilter(date))
});

const mapStateToProps = state => {
  return {
    eventFilters: state.eventFilters,
    events: getVisibleEvents(state.events, state.eventFilters)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
