import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import moment from "moment-jalaali";
import { withRouter } from "react-router-dom";
import useStyles from "../../_styles/user-styles/Header";

function Header(props) {
  const { user } = props;
  const classes = useStyles();

  const handleAddNewEvent = () => {
    props.history.push("/addevent");
  };

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12} sm={5} md={4} className={classes.avatar}>
            <Avatar
              alt={user.username}
              src={user.avatar}
              className={classes.bigAvatar}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={8} className={classes.info}>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>عضویت از {moment(user.createdAt).fromNow()}</p>
            <p>{user.location.city}</p>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={4} className={`${classes.contentCenter}`}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddNewEvent}
            >
              رویداد جدید
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} className={`${classes.contentCenter}`}>
            <div className={classes.stat}>
              <h5>رویدادها</h5>
              <p>{user.events ? user.events.length : "0"}</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withRouter(Header);
