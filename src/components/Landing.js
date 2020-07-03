import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Footer/Footer";
import Collections from "./Collections";
import Feeds from "./Feeds";
import Popular from "./Popular";
import Services from "./Services";
import Navbar from "../components/Navbar/Navbar";

export default function CenteredGrid() {
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <Collections />
      <Feeds />
      <Popular />
      <Services />
      <Footer />
    </React.Fragment>
  );
}
