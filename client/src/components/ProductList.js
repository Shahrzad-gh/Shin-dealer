import React, { useState,  useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import Cart from "../containers/cart";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Basket from "./Basket";

const useStyles = makeStyles({
  listStyle: {
    listStyle: 'none',
  },
  displayList: {
    display: '-webkit-inline-box'
  },
  Nopadding:{
    padding: 0
  }
});

export default function ProductList(props) {
  const classes = useStyles();
   const [productsList, setProductsList] = useState(null);

   useEffect(() => {

    async function fetchData() {
      try{
        const data = await axios.get('/getproductsByCategory',{params:{category: props.category}})
        let p = data.data.products;
        setProductsList(p)
      }catch(err){
        console.error(err)
      }
    }

    fetchData();
    }, [])
  return (
    <Grid container spacing={0}>
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
      <Grid className={classes.Nopadding} item sm={4}>
        <Basket />
      </Grid>
    </Grid>
  );
}
