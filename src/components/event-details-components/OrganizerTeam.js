import React from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { ProfileIcon } from "../../icons/Icons";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Typography, Card, CardMedia } from "@material-ui/core";
import { connect } from "react-redux";
import { getUserById } from "../../_helpers/userFunctions";
import useStyles from "../../_styles/event-details-styles/OrganizerTeam";

function OrganizerTeam(props) {
  const { members, users } = props;
  const classes = useStyles();

  const MenuItem = ({ text, uid }) => {
    const avatar = getUserById(users, uid).avatar;
    return (
      <div className={classes.menuItem}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="avatar"
            height="140"
            image={avatar}
            title="avatar"
          />
          <p className={classes.name}>{text}</p>
          <Typography gutterBottom component="p" color="secondary">
            عنوان برگزارکننده
          </Typography>
          {/* <CardActions>
            <Button size="small" variant="outlined" color="default">
              View Profile
            </Button>
          </CardActions> */}
        </Card>
      </div>
    );
  };

  const Menu = members =>
    members.map(member => {
      const { key, label } = member;

      return <MenuItem text={label} uid={key} key={key} />;
    });

  const Arrow = ({ dir, className }) => {
    if (dir === "right") {
      return (
        <div className={className}>
          <ChevronLeft />
        </div>
      );
    } else if (dir === "left") {
      return (
        <div className={className}>
          <ChevronRight />
        </div>
      );
    }
  };

  const ArrowLeft = Arrow({ dir: "left", className: classes.arrow });
  const ArrowRight = Arrow({ dir: "right", className: classes.arrow });

  const menuItems = Menu(members);

  const menu = menuItems;

  return (
    <Card className={classes.root}>
      <div className={classes.label}>
        <ProfileIcon className={classes.iconSize} />
        <h4>تیم برگزارکننده</h4>
      </div>
      <div>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          inertiaScrolling
          innerWrapperStyle={{ align: "right" }}
        />
      </div>
    </Card>
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(OrganizerTeam);
