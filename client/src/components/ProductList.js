import React from "react";
import ProductCard from "./ProductCard";
import Cart from "../containers/cart";
import Grid from "@material-ui/core/Grid";

export default function ProductList() {

  return (
    <Grid container spacing={1}>
      <Grid item xs={4} sm={8}>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={4}>
            <ProductCard />
          </Grid>          
        </Grid>
      </Grid>
      <Grid item sm={4}>
        <Cart />
      </Grid>
    </Grid>
  );
}
