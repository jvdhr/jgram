import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { MusicIcon, ArtIcon, SportIcon, FestivalIcon } from "../../icons/Icons";
import useStyles from "../../_styles/home-page-styles/News";

function News() {
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.label}>
        <h4>اخبار</h4>
      </div>
      <Divider />
      <List component="nav" aria-label="News">
        <ListItem>
          <Grid container>
            <Grid item xs={2}>
              <ListItemIcon>
                <MusicIcon />
              </ListItemIcon>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.listItemTitle}
                    primary="موسیقی"
                  />
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.newsText}>لورم ایپسوم متن ساختگی</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={2}>
              <ListItemIcon>
                <ArtIcon />
              </ListItemIcon>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.listItemTitle}
                    primary="هنر"
                  />
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.newsText}>با تولید سادگی نامفهوم</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={2}>
              <ListItemIcon>
                <FestivalIcon />
              </ListItemIcon>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.listItemTitle}
                    primary="جشنواره"
                  />
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.newsText}>از صنعت چاپ و با استفاده</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={2}>
              <ListItemIcon>
                <SportIcon />
              </ListItemIcon>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.listItemTitle}
                    primary="ورزشی"
                  />
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.newsText}>از طراحان گرافیک است</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Card>
  );
}

export default News;
