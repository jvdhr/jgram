import React from "react";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  MusicIcon,
  FestivalIcon,
  ArtIcon,
  ComedyIcon,
  SportIcon,
  ConcertIcon,
  TheaterIcon,
  PromotionsIcon
} from "../icons/Icons";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import useStyles from "../_styles/Categories";

export default function Categories() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h2" component="h2">
            دسته‎بندی‎ها
          </Typography>
        </div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.row}>
            <Grid container className={classes.itemContainer}>
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Music`}
              >
                <div className={classes.iconContainer}>
                  <MusicIcon />
                </div>
                <h4>موسیقی</h4>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Festival`}
              >
                <div className={classes.iconContainer}>
                  <FestivalIcon />
                </div>
                <h4>جشنواره</h4>
                <p>
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Art`}
              >
                <div className={classes.iconContainer}>
                  <ArtIcon />
                </div>
                <h4>هنر</h4>
                <p>
                  برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                  بهبود ابزارهای کاربردی می باشد
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Concert`}
              >
                <div className={classes.iconContainer}>
                  <ConcertIcon />
                </div>
                <h4>کنسرت</h4>
                <p>
                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                  جامعه و متخصصان را می طلبد
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Comedy`}
              >
                <div className={classes.iconContainer}>
                  <ComedyIcon />
                </div>
                <h4>کمدی</h4>
                <p>
                  با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                  الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Sports`}
              >
                <div className={classes.iconContainer}>
                  <SportIcon />
                </div>
                <h4>ورزشی</h4>
                <p>
                  در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Theater`}
              >
                <div className={classes.iconContainer}>
                  <TheaterIcon />
                </div>
                <h4>تئاتر</h4>
                <p>
                  زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
                </p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.item}
                component={Link}
                to={`/categories/Promotions`}
              >
                <div className={classes.iconContainer}>
                  <PromotionsIcon />
                </div>
                <h4>تبلیغات</h4>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
