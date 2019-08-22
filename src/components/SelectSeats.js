import React from "react";
import Navbar from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { DateIcon, TicketIcon, SeatIcon } from "../icons/Icons";
import Footer from "./Footer"
import useStyles from "../_styles/SelectSeats"

export default function SelectSeats() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h2" component="h2">
            صندلیتون رو انتخاب کنید
          </Typography>
        </div>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} sm={9} className={classes.chart}>
            <Card className={classes.card}>
              <Typography variant="h5">انتخاب صندلی</Typography>
              <p className={classes.subtitle}>
                صندلیتون رو از چارت پایین انتخاب کنید
              </p>
              <div className={classes.hall}>
                <div className={classes.section}>
                  <div className={classes.block}>
                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 1">
                          1
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 2">
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip} ${classes.selected}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 3">
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 4">
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 5">
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 6">
                          6
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip} ${classes.selected}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 7">
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 8">
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 9">
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip} ${classes.selected}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.chairContainer}>
                        <div className={classes.rowHead} title="ردیف 10">
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-20"
                            value="همکف-1-20"
                            price="120000"
                          />
                          20
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-19"
                            value="همکف-1-19"
                            price="120000"
                          />
                          19
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-18"
                            value="همکف-1-18"
                            price="120000"
                          />
                          18
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-17"
                            value="همکف-1-17"
                            price="120000"
                          />
                          17
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-16"
                            value="همکف-1-16"
                            price="120000"
                          />
                          16
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-15"
                            value="همکف-1-15"
                            price="120000"
                          />
                          15
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-14"
                            value="همکف-1-14"
                            price="120000"
                          />
                          14
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-13"
                            value="همکف-1-13"
                            price="120000"
                          />
                          13
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-12"
                            value="همکف-1-12"
                            price="120000"
                          />
                          12
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-11"
                            value="همکف-1-11"
                            price="120000"
                          />
                          11
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱۰ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-10"
                            value="همکف-1-10"
                            price="120000"
                          />
                          10
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۹ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-9"
                            value="همکف-1-9"
                            price="120000"
                          />
                          9
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۸ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-8"
                            value="همکف-1-8"
                            price="120000"
                          />
                          8
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۷ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-7"
                            value="همکف-1-7"
                            price="120000"
                          />
                          7
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۶ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-6"
                            value="همکف-1-6"
                            price="120000"
                          />
                          6
                        </div>

                        <div className={classes.chairSpacer}>&nbsp;</div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۵ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-5"
                            value="همکف-1-5"
                            price="120000"
                          />
                          5
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۴ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-4"
                            value="همکف-1-4"
                            price="120000"
                          />
                          4
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۳ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-3"
                            value="همکف-1-3"
                            price="120000"
                          />
                          3
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۲ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-2"
                            value="همکف-1-2"
                            price="120000"
                          />
                          2
                        </div>

                        <div
                          className={`${classes.chair} ${classes.tooltip}`}
                          title="صندلی ۱ از ردیف ۱ / ۱۲۰,۰۰۰ تومان"
                        >
                          <input
                            disabled="disabled"
                            type="checkbox"
                            name="chair"
                            data-base-id="A-1-1"
                            value="همکف-1-1"
                            price="120000"
                          />
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.info}>
            <Card className={`${classes.card} ${classes.checkoutInfo}`}>
              <Typography variant="h5">اطلاعات سفارش</Typography>
              <p className={classes.subtitle}>
                صندلی مورد نظرتون رو از چارت انتخاب کنید و روی پرداخت کلیک کنید.
              </p>
              <Typography variant="h6" component="p">
                جزئیات سفارشتون:
              </Typography>
              <Box mb={2}>
              <div className={classes.label}>
                <DateIcon className={classes.iconSize} />
                <div className={classes.subtitle}>17 مرداد</div>
              </div>
              <div className={classes.label}>
                <TicketIcon className={classes.iconSize} />
                <div className={classes.subtitle}>کنسرت</div>
              </div>
              <div className={classes.label}>
                <SeatIcon className={classes.iconSize} />
                <div className={classes.subtitle}>ردیف 1 صندلی 18</div>
                <div className={classes.subtitle}>ردیف 6 صندلی 6</div>
                <div className={classes.subtitle}>ردیف 9 صندلی 11</div>
              </div>
              </Box>
              <Button variant="contained" color="secondary">
                پرداخت
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}
