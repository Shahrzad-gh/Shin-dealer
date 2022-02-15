import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import eco from "../../../assets/eco.png";
import paypal from "../../../assets/paypal.png";
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";
import sec from "../../../assets/sec.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  styledCard: {
    padding: 50,
  },
  typography: { fontFamily: "Almarai !important", fontSize: "1rem !important" },
  subscribe: {
    width: "10vw",
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#717fe0",
    color: "#fff",
    border: "none",
    fontFamily: "Almarai !important",
    fontSize: "1rem !important",
  },
  copyright: {
    fontSize: "0.8rem",
    fontWeight: 100,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container className={classes.styledCard}>
          <Grid container>
            <Grid
              item
              xs={6}
              md={3}
              className={(classes.styledCard, classes.typography)}
            >
              <h4>خبرنامه</h4>
              <p>info@shin-dealer.com</p>
              <Divider />

              <button className={classes.subscribe}>اشتراک</button>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className={(classes.styledCard, classes.typography)}
            >
              <h4>راه های ارتباطی</h4>
              <p>شبکه های اجتماعی ما را دنبال کنید</p>
              <FacebookOutlinedIcon />
              <PinterestIcon />
              <InstagramIcon />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className={(classes.styledCard, classes.typography)}
            >
              <h4>راهنما</h4>
              <ul>
                <li>پیگیری سفارش</li>
                <li>عودت</li>
                <li>حمل و نقل</li>
                <li>سوالات متداول</li>
              </ul>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className={(classes.styledCard, classes.typography)}
            >
              <h4>دسته بندی ها</h4>
              <ul>
                <li>زنانه</li>
                <li>مردانه</li>
                <li>بچه گانه</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.copyright}>
          <div className="flex-c-m flex-w p-b-18">
            <a href="#" className="m-all-1">
              <img src={paypal} alt="ICON-PAY" />
            </a>
            <a href="#" className="m-all-1">
              <img src={visa} alt="ICON-PAY" />
            </a>
            <a href="#" className="m-all-1">
              <img src={mastercard} alt="ICON-PAY" />
            </a>
            <a href="#" className="m-all-1">
              <img src={sec} alt="ICON-PAY" />
            </a>
            <a href="#" className="m-all-1">
              <img src={eco} alt="ICON-PAY" />
            </a>
          </div>
          <p>
            Copyright ©2022 All rights reserved | This template is made with by
            Shahrzad-gh
          </p>
        </div>
      </AppBar>
    </div>
  );
}
