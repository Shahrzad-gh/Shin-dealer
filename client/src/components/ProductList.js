import React, { useState,  useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import Cart from "../containers/cart";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

const useStyles = makeStyles({
  listStyle: {
    listStyle: 'none',
  },
  displayList: {
    display: '-webkit-inline-box'
  }
});

export default function ProductList() {
  const classes = useStyles();

   const [productsList, setProductsList] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try{
        const data = await axios.get('/getallproducts')
        let p = data.data.products;
        setProductsList(p)
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
          <Grid item xs={4} sm={4} className={classes.displayList}>
            { productsList && productsList.map((p) => 
              (  <li key={p._id} className={classes.listStyle}>
                   <ProductCard key={p._id} data={p} />
                 </li>
                )
              )
              }
          </Grid>          
        </Grid>
      </Grid>
      <Grid item sm={4}>
        <Cart />
      </Grid>
    </Grid>
  );
}
