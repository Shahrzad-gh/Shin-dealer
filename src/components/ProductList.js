import React from "react";
import ProductCard from "./ProductCard";
import ShoppingBasket from "./ShoppingBasket";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function ProductList() {
  return (
    <div className="page">
      <Grid container spacing={1}>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}
