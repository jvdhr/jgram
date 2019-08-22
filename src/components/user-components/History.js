import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useStyles from "../../_styles/user-styles/Bookmarks";

function History(props) {
  const { history } = props;
  const classes = useStyles();

  let jsx;
  if (!history) {
    jsx = (
      <Grid item xs={12}>
        <Box>
          <Typography variant="h5">تاریخچه‎ای موجود نیست.</Typography>
        </Box>
        <Box>
          <Typography component="p" color="textSecondary">
            رویدادهایی که روزو کردین یا بلیت‎شون رو خریدید اینجا نشون داده میشن.
          </Typography>
        </Box>
      </Grid>
    );
  } else {
    jsx = history.map(event => {
      return (
        <Grid key={event.id} item xs={12} md={6}>
          <p>History card here</p>
        </Grid>
      );
    });
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <Grid container spacing={1}>
        {jsx}
      </Grid>
    </Container>
  );
}

export default History;
