import React from "react";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import MiniProfile from "./home-page-components/MiniProfile";
import Categories from "./home-page-components/Categories";
import EventSearch from "./home-page-components/EventSearch";
import EventCard from "./home-page-components/EventCard";
import ExploreEvents from "./home-page-components/ExploreEvents";
import WeatherCard from "./home-page-components/WeatherCard";
import News from "./home-page-components/News";
import { connect } from "react-redux";
import moment from "moment-jalaali";
import Footer from "./Footer";
import useStyles from "../_styles/Home";

function Home(props) {
  const { currentViewer, events, isAuthenticated } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function TabContainer(props) {
    return <Typography component="div">{props.children}</Typography>;
  }

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="lg">
        <Grid container spacing={1} className={classes.root}>
          <Hidden smDown>
            <Grid item md={3}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  {isAuthenticated && <MiniProfile user={currentViewer} />}
                </Grid>
                <Grid item xs={12}>
                  <Categories />
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8} md={6}>
            <EventSearch />
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              centered
            >
              <Tab label="پیش‎رو" />
              <Tab label="این هفته" />
              <Tab label="این ماه" />
            </Tabs>
            <TabContainer>
              {events.map(event => {
                if (
                  (value === 1 &&
                    moment(event.dateTime[0]) <= moment().endOf("week") &&
                    moment(event.dateTime[0])) >= moment() ||
                  (value === 2 &&
                    moment(event.dateTime[0]) <= moment().endOf("month") &&
                    moment(event.dateTime[0])) >= moment() ||
                  (value === 0 &&
                    moment(event.dateTime[0]) <= moment().endOf("day") &&
                    moment(event.dateTime[0])) >= moment()
                ) {
                  return (
                    <Box key={event.id} mb={1}>
                      <EventCard event={event} />
                    </Box>
                  );
                }
              })}
            </TabContainer>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} className={classes.blur}>
                <ExploreEvents />
              </Grid>
              <Grid item xs={12}>
                <WeatherCard
                  city={
                    // If user has logged in use his/her location otherwise use default (Tehran)
                    isAuthenticated ? currentViewer.location.city : "تهران"
                  }
                />
              </Grid>
              <Grid item xs={12} className={classes.blur}>
                <News />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

const mapStateToProps = state => {
  return {
    currentViewer: state.authRedux,
    events: state.events,
    isAuthenticated: !!state.authRedux.uid
  };
};

export default connect(mapStateToProps)(Home);
