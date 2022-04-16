import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Basket from "./Basket";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategory } from "../Store/actions/productActions";
import SortIcon from '@mui/icons-material/Sort';
import Container from "@mui/material/Container";

import "../App.css"
const useStyles = makeStyles({
  root: {
    width:"100%"
  },
  listStyle: {
    listStyle: "none",
  },
  displayList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  Nopadding: {
    padding: 0,
  },
  filterMenu: {
    alignItems: "center",
    display: "inline-flex",
  },
  menu: {
    paddingRight: 0,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  item: {
    padding: 10,
    marginRight: 5,
  },
});

export default function ProductList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.product.products);

  useEffect(() => {
    const { cat_id } = props.category;
    const payload = {
      params: {
        cat_id,
      },
    };

    dispatch(getProductsByCategory(payload));
  }, []);

  const handleSortASD = async () => {
    // try{
    //   const data = await axios.get('/getproductsByCategoryASD',{params:{category: props.category.cat_id}})
    //let p = data.data.products;
    //setProductsList(p)
    // }catch(err){        console.error(err)
    // }
  };
  const handleSortDSD = async () => {
    //try{
    //const data = await axios.get('/getproductsByCategoryDSD',{params:{category: props.category.cat_id}})
    //let p = data.data.products;
    // setProductsList(p)
    //}catch(err){        console.error(err)
    ////}
  };

  return (
    <div className={classes.root}>
                <Container>
            <ul className={classes.menu}>
              <li className={classes.item}>جواهرات</li>
              <li className={classes.item}>کفش</li>
              <li className={classes.item}>بچه گانه</li>
              <li className={classes.item}>مردانه</li>
              <li className={classes.item}>زنانه</li>
              <li className={classes.item}>همه</li>
            </ul>
          </Container>
        <Grid container>
          <Grid item className={classes.displayList}>
            {productsList &&
              productsList.map((p) => (
                <li key={p._id} className={classes.listStyle}>
                  <ProductCard key={p._id} data={p} />
                </li>
              ))}
          </Grid>
      </Grid>
      </div>
  );
}
