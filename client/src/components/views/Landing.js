import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../layout/Footer/Footer";
import Collections from "../Collections";
import Feeds from "../Feeds";
import Popular from "../Popular";
import Services from "../Services";

export default function CenteredGrid() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Collections />
      <Feeds />
      <Popular />
      <Services />
      <Footer />
    </React.Fragment>
  );
}
