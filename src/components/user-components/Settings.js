import React, { useState } from "react";
import PersonalInfo from "./settings-components/PersonalInfo";
import Profile from "./settings-components/Profile";
import ChangePassword from "./settings-components/ChangePassword";
import DeactiveAccount from "./settings-components/DeactiveAccount";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column"
    // "@media (max-width: 600px)": {
    //   flexDirection: "row"
    // }
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const MyTab = withStyles(theme => ({
  selected: {
    color: theme.palette.secondary,
    borderRight: "2px solid #f50057",
    "@media (max-width: 600px)": {
      borderRight: "none",
      borderBottom: `2px solid #f50057`
    }
  }
}))(Tab);

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

export default function Settings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (_, activeIndex) => setActiveIndex(activeIndex);

  return (
    <Grid container spacing={2} elevation={6}>
      <Grid item xs={12} sm={3}>
        <Card>
          <VerticalTabs value={activeIndex} onChange={handleChange}>
            <MyTab label="اطلاعات شخصی" />
            <MyTab label="تصویر پروفایل" />
            <MyTab label="تغییر گذرواژه" />
            <MyTab label="غیرفعالسازی حساب" />
          </VerticalTabs>
        </Card>
      </Grid>
      <Grid item xs={12} sm={9}>
        {activeIndex === 0 && (
          <TabContainer>
            <PersonalInfo />
          </TabContainer>
        )}
        {activeIndex === 1 && (
          <TabContainer>
            <Profile />
          </TabContainer>
        )}
        {activeIndex === 2 && (
          <TabContainer>
            <ChangePassword />
          </TabContainer>
        )}
        {activeIndex === 3 && (
          <TabContainer>
            <DeactiveAccount />
          </TabContainer>
        )}
      </Grid>
    </Grid>
  );
}
