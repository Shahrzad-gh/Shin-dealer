import React from "react";
import { useLocation } from "react-router";
import ProductList from "./ProductList";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: 20,
  },
});

export default function WomenClothes() {
  let location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProductList category={location.state} />
    </div>
  );
}
