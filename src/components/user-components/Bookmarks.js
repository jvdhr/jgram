import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import EventCard from "../home-page-components/EventCard";
import useStyles from "../../_styles/user-styles/Bookmarks";

function Bookmarks(props) {
  const { bookmarks, events } = props;
  const classes = useStyles();

  let jsx;
  if (bookmarks && events) {
    jsx = events.map(event => {
      if (!bookmarks.every(bookmark => bookmark.id !== event.id)) {
        return (
          <Grid key={event.id} item xs={12} md={6}>
            <EventCard event={event} />
          </Grid>
        );
      }
    });
  } else {
    jsx = (
      <Grid item xs={12}>
        <Box>
          <Typography variant="h5">نمایه‎ای وجود ندارد.</Typography>
        </Box>
        <Box>
          <Typography component="p">
            رویدادهای که نشانه‎گذاری (bookmark) کردید اینجا نشون داده میشن.
          </Typography>
        </Box>
      </Grid>
    );
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <Grid container spacing={1}>
        {jsx}
      </Grid>
    </Container>
  );
}

export default Bookmarks;
