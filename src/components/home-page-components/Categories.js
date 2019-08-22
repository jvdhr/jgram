import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import {
  MusicIcon,
  FestivalIcon,
  ArtIcon,
  SportIcon,
  ComedyIcon,
  ConcertIcon
} from "../../icons/Icons";
import useStyles from "../../_styles/home-page-styles/Categories";

const categories = [
  { cat: "موسیقی", value: "music", icon: <MusicIcon /> },
  { cat: "جشنواره", value: "festival", icon: <FestivalIcon /> },
  { cat: "هنر", value: "art", icon: <ArtIcon /> },
  { cat: "کمدی", value: "comedy", icon: <ComedyIcon /> },
  { cat: "کنسرت", value: "concert", icon: <ConcertIcon /> },
  { cat: "ورزشی", value: "sports", icon: <SportIcon /> }
];

function Categories() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <h4 className={classes.label}>دسته‎بندی</h4>
      <Divider />
      <List component="nav" aria-label="Categories">
        {categories.map((c, idx) => {
          return (
            <React.Fragment key={c.cat}>
              <ListItem button component={Link} to={`/categories/${c.value}`}>
                <ListItemIcon>{c.icon}</ListItemIcon>
                <ListItemText
                  primary={c.cat}
                  className={classes.listItemText}
                />
              </ListItem>
              {categories.length !== idx + 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </Card>
  );
}

export default Categories;
