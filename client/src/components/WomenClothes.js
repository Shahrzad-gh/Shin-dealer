import React from "react";
import { useLocation } from "react-router";
import ProductList from "./ProductList";
import { makeStyles } from "@mui/styles";
import Filters from "./Filters";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
});

export default function WomenClothes() {
  let location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <Filters /> */}
      <ProductList category={location.state} />

    </div>
  );
}
