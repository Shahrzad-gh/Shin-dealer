import React, { useState,  useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "../containers/cart";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

export default function ProductList() {
   const [productsList, setProductsList] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try{
        const data = await axios.get('/getallproducts')
        let p = data.data.products;
        setProductsList(p)
        console.log(productsList)
      }catch(err){
        console.error(err)
      }
    }

    fetchData();
    }, [])
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} sm={8}>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={4}>
            {productsList && productsList.map((p) => <ProductCard key={p._id} data={p} />)}
            {/* <ProductCard /> */}
          </Grid>          
        </Grid>
      </Grid>
      <Grid item sm={4}>
        <Cart />
      </Grid>
    </Grid>
  );
}
