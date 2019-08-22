import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInPage from "../components/SignInPage";
import SignUpPage from "../components/SignUpPage";
import Home from "../components/Home";
import Search from "../components/Search";
import EventDetails from "../components/EventDetails";
import AddNewEvent from "../components/AddNewEvent";
import Categories from "../components/Categories";
import User from "../components/User";
import Settings from "../components/user-components/Settings";
import SelectSeats from "../components/SelectSeats";
import ContactUs from "../components/ContactUs";
import About from "../components/About";
import Weather from "../components/Weather";
import Category from "../components/Category";
import PrivateRoute from "./PrivateRoute";

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/event/:id" component={EventDetails} />
      <PrivateRoute exact path="/addevent" component={AddNewEvent} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/categories/:category" component={Category} />
      <PrivateRoute exact path="/profile" component={User} />
      <PrivateRoute exact path="/settings" component={Settings} />
      <PrivateRoute exact path="/selectseat/:id" component={SelectSeats} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/about" component={About} />
      <Route exact path="/weather" component={Weather} />
      <Route render={() => <h1>Oops! Page Not Found</h1>} />
    </Switch>
  );
}

export default AppRouter;
