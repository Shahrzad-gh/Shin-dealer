import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../layout/Footer/Footer";
import Collections from "../Collections";
import Feeds from "../Feeds";
import Popular from "../Popular";
import Services from "../Services";
import Overview from "../Overview";
import Container from "@mui/material/Container";
import Header from "../layout/Header/Header"
export default function CenteredGrid() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Collections />
      <Feeds />
      <Overview />
      {/* <Popular />
      <Services /> */}
      <Footer />
    </React.Fragment>
  );
}
