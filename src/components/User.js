import React from "react";
import PropTypes from "prop-types";
import Header from "./user-components/Header";
import Settings from "./user-components/Settings";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Events from "./user-components/Events";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import History from "./user-components/History";
import Bookmarks from "./user-components/Bookmarks";
import Footer from "./Footer";
import useStyles from "../_styles/User";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

function User(props) {
  const { currentViewer } = props;
  const classes = useStyles();

  const [tabValue, setTabValue] = React.useState(0);

  function handleChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div
          className={classes.header}
          style={{
            backgroundImage: `url(${currentViewer.cover})`
          }}
        />
        <Container component="main" maxWidth="lg">
          <Grid container display="flex" alignItems="center">
            <Grid item xs={12}>
              <Header user={currentViewer} />
            </Grid>
            <Grid item xs={12}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Profile overview"
              >
                <Tab label="نمایه‎ها" {...a11yProps(0)} />
                <Tab label="رویدادها" {...a11yProps(1)} />
                <Tab label="تاریخچه" {...a11yProps(2)} />
                <Tab label="تنظیمات" {...a11yProps(3)} />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <Bookmarks
                  events={props.events}
                  bookmarks={currentViewer.bookmarks}
                />
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Events events={props.events} uid={currentViewer.uid} />
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <History history={currentViewer.history} />
              </TabPanel>
              <TabPanel value={tabValue} index={3}>
                <Settings />
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = state => {
  return {
    currentViewer: state.authRedux,
    events: state.events
  };
};

export default connect(mapStateToProps)(withRouter(User));
