import React from "react";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import {
  DateIcon,
  TicketIcon,
  CheckBoxIcon,
  SmileIcon,
  LinkedInIcon,
  GithubIcon
} from "../icons/Icons";
import useStyles from "../_styles/About";

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h5">درباره ما</Typography>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
            و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <Grid container>
            <Grid item xs={6} sm={3} className={classes.features}>
              <DateIcon />
              <Typography variant="h6">رویداد ایجاد کنید</Typography>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.features}>
              <CheckBoxIcon />
              <Typography variant="h6">جایگاه رزرو کنید</Typography>
              <p>
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است
              </p>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.features}>
              <TicketIcon />
              <Typography variant="h6">بلیت بخرید</Typography>
              <p>
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد.
              </p>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.features}>
              <SmileIcon />
              <Typography variant="h6">لذت ببرید</Typography>
              <p>
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و شرایط سخت تایپ به پایان رسد.
              </p>
            </Grid>
          </Grid>
          <Button variant="contained" color="secondary">
            ایجاد یک رویداد جدید
          </Button>
        </Container>
        <div className={classes.founders}>
          <Container maxWidth="md" className={classes.container}>
            <Typography variant="h4">تیم متخصصین ما</Typography>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={4} className={classes.imgContainer}>
                <img
                  className={classes.image}
                  alt=""
                  src="http://quiz-jvd.herokuapp.com/static/media/jay.29455313.jpg"
                />
                <div className={classes.middle}>
                  <p className={classes.info}>جواد حسین‎زاده</p>
                  <p className={`${classes.info} ${classes.job}`}>
                    طراح و توسعه‎دهنده وب
                  </p>
                  <Grid container display="flex" justify="center" spacing={2}>
                    <Grid item>
                      <a
                        href="https://www.linkedin.com/in/jvdhr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        href="https://github.com/jvdhr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
