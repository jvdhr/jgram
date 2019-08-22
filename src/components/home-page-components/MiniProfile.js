import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { LocationIcon } from "../../icons/Icons";
import { withRouter } from "react-router-dom";
import moment from "moment-jalaali";
import useStyles from "../../_styles/home-page-styles/MiniProfile";

function MiniProfile(props) {
  const { user } = props;
  const classes = useStyles();
  return (
    <Card className={classes.MiniProfile}>
      <CardMedia
        component="img"
        alt={`${user.username}'s cover`}
        height="140"
        image={user.cover}
        title={`${user.username}'s cover`}
      />
      <Avatar
        alt={user.username}
        src={user.avatar}
        className={classes.bigAvatar}
      />
      <Typography
        className={classes.name}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {`${user.firstName} ${user.lastName}`}
      </Typography>
      <div className={classes.location}>
        <span>
          <LocationIcon className={classes.iconSize} />
        </span>
        <p>{user.location.city}</p>
      </div>
      <Grid
        container
        className={classes.socialContainer}
        justify="space-around"
      >
        <Grid item className={classes.social} xs={6}>
          <h4>رویدادها</h4>
          <p>{user.events ? user.events.length : "0"}</p>
        </Grid>
        <Grid item className={classes.social} xs={6}>
          <h4>عضویت از</h4>
          <p>{moment(user.createdAt).format("jMMMM jYYYY")}</p>
        </Grid>
      </Grid>
      <CardActions className={classes.link}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => props.history.push(`/profile`)}
        >
          مشاهده پروفایل
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(MiniProfile);
