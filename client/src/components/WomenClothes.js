import React from "react";
import { useLocation } from "react-router";
import ProductList from "./ProductList";
import { makeStyles } from "@mui/styles";
import Basket from "./Basket";

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
      <ProductList category={location.state} />
      <Basket />
    </div>
  );
}
