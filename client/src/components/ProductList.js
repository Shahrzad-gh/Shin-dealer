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

const useStyles = makeStyles({
  listStyle: {
    listStyle: "none",
  },
  displayList: {
    display: "flex",
  },
  Nopadding: {
    padding: 0,
  },
  filterMenu: {
    width: "100%",
    border: "1px lightgray solid",
    display: "inline-flex",
    borderRadius: 15,
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
    <Grid container>
      <Grid item>
        <Grid>
          <List component="nav" className={classes.filterMenu}>
            <ListItem button onClick={handleSortDSD}>
              <ListItemIcon>
                <ArrowUpwardIcon />
              </ListItemIcon>
              <ListItemText primary="گران ترین" />
            </ListItem>
            <ListItem button onClick={handleSortASD}>
              <ListItemIcon>
                <ArrowDownwardIcon />
              </ListItemIcon>
              <ListItemText primary="ارزان ترین" />
            </ListItem>
          </List>
        </Grid>
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
      </Grid>
    </Grid>
  );
}
