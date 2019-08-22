import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import NoAccess from "../components/NoAccess";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Fragment>
          <Navbar />
          <NoAccess {...props} />
          <Footer />
        </Fragment>
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authRedux.uid
});

export default connect(mapStateToProps)(PrivateRoute);
