import React, { useState, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListAlt from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";
import { WeatherIcon } from "../icons/Icons";
import { startLogout } from "../_actions/authActions";
import useStyles from "../_styles/Navbar";

function Navbar(props) {
  const { currentViewer, startLogout, isAuthenticated } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearchKeyDown = event => {
    if (event.key === "Enter") {
      props.history.push({
        pathname: "/search",
        state: { text: event.target.value }
      });
    }
  };

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleSignOut() {
    startLogout().then(() => {
      handleMenuClose();
      setSnackbarOpen(true);
    });
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLinkDrawer}
            exact
            to="/"
            activeClassName={classes.activeLinkDrawer}
          >
            صفحه اول
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <NavLink
            className={classes.navLinkDrawer}
            exact
            to="/categories"
            activeClassName={classes.activeLinkDrawer}
          >
            دسته‎بندی‎ها
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLinkDrawer}
            exact
            to="/search"
            activeClassName={classes.activeLinkDrawer}
          >
            جستجو
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WeatherIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLinkDrawer}
            exact
            to="/weather"
            activeClassName={classes.activeLinkDrawer}
          >
            آب و هوا
          </NavLink>
        </ListItem>
        {isAuthenticated && (
          <ListItem>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <NavLink
              className={classes.navLinkDrawer}
              exact
              to="/addevent"
              activeClassName={classes.activeLinkDrawer}
            >
              رویداد جدید
            </NavLink>
          </ListItem>
        )}
      </List>
    </div>
  );

  function handleAddNewEvent() {
    props.history.push("/addevent");
  }

  const avatarMenuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={avatarMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => props.history.push("/profile")}>
        پروفایل
      </MenuItem>
      <MenuItem onClick={handleSignOut}>خروج</MenuItem>
    </Menu>
  );

  const mobileAvatarMenuId = "primary-search-account-menu-mobile";
  let renderMobileMenu = null;
  if (isAuthenticated) {
    renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        id={mobileAvatarMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="Show new messages" color="inherit">
            <Badge variant="dot" color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>پیام‎ها</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="Show new notifications" color="inherit">
            <Badge variant="dot" color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>اعلان‎ها</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="Account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar
              alt="avatar"
              src={currentViewer.avatar}
              className={classes.bigAvatar}
            />
          </IconButton>
          <p>سلام {currentViewer.firstName}</p>
        </MenuItem>
      </Menu>
    );
  }

  let sectionDesktop;
  if (isAuthenticated) {
    sectionDesktop = (
      <div className={classes.sectionDesktop}>
        <IconButton aria-label="Show new mails" color="inherit">
          <Badge variant="dot" color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="Show new notifications" color="inherit">
          <Badge variant="dot" color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="Account of current user"
          aria-controls={avatarMenuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Avatar
            alt="avatar"
            src={currentViewer.avatar}
            className={classes.bigAvatar}
          />
        </IconButton>
      </div>
    );
  } else {
    sectionDesktop = (
      <Fragment>
        <Button
          variant="text"
          style={{ color: "white" }}
          onClick={() => props.history.push("/signin")}
        >
          ورود
        </Button>
        <Button
          variant="text"
          style={{ color: "white" }}
          onClick={() => props.history.push("/signup")}
        >
          ثبت نام
        </Button>
      </Fragment>
    );
  }

  function handleSnackbarClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  }

  const renderSnackbar = (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">شما از حسابتون خارج شدید!</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleSnackbarClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={toggleDrawer(true)}
                edge="end"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography className={classes.title} variant="h6" noWrap>
              JGram
            </Typography>
            <Hidden smDown>
              <div className={classes.navLinkContainer}>
                <NavLink
                  className={classes.navLink}
                  exact
                  to="/"
                  activeClassName={classes.activeLink}
                >
                  صفحه اول
                </NavLink>
                <NavLink
                  className={classes.navLink}
                  exact
                  to="/categories"
                  activeClassName={classes.activeLink}
                >
                  دسته‎بندی‎ها
                </NavLink>
                <NavLink
                  className={classes.navLink}
                  exact
                  to="/search"
                  activeClassName={classes.activeLink}
                >
                  جستجو
                </NavLink>
                <NavLink
                  className={classes.navLink}
                  exact
                  to="/weather"
                  activeClassName={classes.activeLink}
                >
                  آب و هوا
                </NavLink>
              </div>
              {isAuthenticated && (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.addEvent}
                  onClick={handleAddNewEvent}
                >
                  رویداد جدید
                </Button>
              )}
            </Hidden>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="جستجو..."
                type="search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
            <div className={classes.grow} />

            {sectionDesktop}

            {isAuthenticated && (
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="Show more"
                  aria-controls={mobileAvatarMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer
        open={drawerOpen}
        anchor="left"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>

      {renderMobileMenu}
      {renderMenu}
      {renderSnackbar}
    </div>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.authRedux,
  isAuthenticated: !!state.authRedux.uid
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
