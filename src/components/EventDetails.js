import React from "react";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Header from "./event-details-components/Header";
import SubHeader from "./event-details-components/SubHeader";
import RemainingTime from "./event-details-components/RemainingTime";
import OrganizerTeam from "./event-details-components/OrganizerTeam";
import EventComments from "./event-details-components/EventComments";
import EventInfo from "./home-page-components/EventInfo";
import EventAttendance from "./home-page-components/EventAttendance";
import { MenuIcon, CommentIcon, LocationIcon } from "../icons/Icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./Footer";
import Map from "./event-details-components/Map";
import { getEventById } from "../_helpers/eventFunctions";
import useStyles from "../_styles/EventDetails";

function EventDetails(props) {
  const { events } = props;
  const classes = useStyles();

  let jsx;
  const event = getEventById(events, props.match.params.id);

  if (!event) {
    jsx = (
      <div className={`${classes.loginMessage} ${classes.root}`}>
        <Box my={2}>
          <Typography variant="h3">رویداد پیدا نشد!</Typography>
        </Box>
      </div>
    );
  } else {
    jsx = (
      <div className={classes.root}>
        <div
          className={classes.header}
          style={{
            backgroundImage: `url(${event.cover})`
          }}
        >
          <Header event={event} />
        </div>
        <SubHeader event={event} />
        <Container maxWidth="md">
          <Grid container justify="space-between">
            <Grid item xs={12} sm={6} className={classes.grid}>
              <Card className={classes.card}>
                <div className={classes.label}>
                  <MenuIcon className={classes.iconSize} />
                  <h4>توضیحات</h4>
                </div>
                <p className={classes.desc}>{event.description}</p>
              </Card>
              <OrganizerTeam members={event.organizers} />
              <Card className={classes.card}>
                <div className={classes.label}>
                  <LocationIcon className={classes.iconSize} />
                  <h4>آدرس محل برگزاری</h4>
                </div>
                <p className={classes.desc}>{`${event.location.city}، ${
                  event.location.address
                }`}</p>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid}>
              <Card className={classes.card}>
                <EventInfo event={event} />
              </Card>
              <Card className={classes.card}>
                <EventAttendance event={event} />
              </Card>
              <Card className={classes.card}>
                <RemainingTime dateTime={event.dateTime} />
              </Card>
              <Card className={classes.card}>
                <div className={classes.label}>
                  <LocationIcon className={classes.iconSize} />
                  <h4>مکان برگزاری</h4>
                </div>
                <Map location={event.location} />
              </Card>
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <Card className={classes.card}>
                <div className={classes.label}>
                  <CommentIcon
                    style={{ color: "rgb(233, 5, 71)" }}
                    className={classes.iconSize}
                  />
                  <h4>نظرات</h4>
                </div>
                <EventComments event={event} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {jsx}
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(withRouter(EventDetails));
