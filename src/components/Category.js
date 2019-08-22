import React, { useEffect } from "react";
import EventCard from "./home-page-components/EventCard";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import { SearchIcon } from "../icons/Icons";
import { connect } from "react-redux";
import {
  setCityFilter,
  setTextFilter,
  setCategoryFilter
} from "../_actions/eventFiltersAction";
import getVisibleEvents from "../_selectors/events";
import { TextField } from "@material-ui/core";
import Footer from "./Footer";
import useStyles from "../_styles/Category";

function Category(props) {
  const {
    eventFilters,
    setCityFilter,
    setTextFilter,
    setCategoryFilter
  } = props;
  const classes = useStyles();

  useEffect(() => {
    document.title = props.match.params.category
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    setCategoryFilter(props.match.params.category);

    return () => {
      document.title = "JGram";
    };
  }, [props.match.params.category, setCategoryFilter]);

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
            <Box className={classes.provinceContainer}>
              <TextField
                placeholder="نام شهر را وارد کنید"
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

        <Grid container spacing={4} className="Search-filters">
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
  setCategoryFilter: category => dispatch(setCategoryFilter(category))
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
)(Category);
