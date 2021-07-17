import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";
//import axios from 'axios';
import Basket from "./Basket";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useSelector, useDispatch } from 'react-redux'
import { getProductsByCategory} from "../Store/actions/productActions";

const useStyles = makeStyles({
  listStyle: {
    listStyle: 'none',
  },
  displayList: {
    display: '-webkit-inline-box'
  },
  Nopadding:{
    padding: 0
  },
  filterMenu:{
    width:' 100%',
    border: '1px lightgray solid',
    display: "inline-flex",
    borderRadius: 15
  },
  
});

export default function ProductList(props) {
  const classes = useStyles();
   //const [productsList, setProductsList] = useState(null);
   const dispatch = useDispatch();
   const productsList = useSelector(state => state.product.products)

   useEffect(() => {
    const {cat_id} = props.category
    const payload = {
      params: {
        cat_id,
      },
    }

    dispatch(getProductsByCategory(payload))
    },[dispatch, props.category])
        
    const handleSortASD = async() => {
      // try{
      //   const data = await axios.get('/getproductsByCategoryASD',{params:{category: props.category.cat_id}})
        //let p = data.data.products;
        //setProductsList(p)
      // }catch(err){        console.error(err)
      // }

    }
    const handleSortDSD = async() => {
    //try{
      //const data = await axios.get('/getproductsByCategoryDSD',{params:{category: props.category.cat_id}})
      //let p = data.data.products;
     // setProductsList(p)
    //}catch(err){        console.error(err)
    ////}
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={4} sm={8}>
        <Grid>
        <List component="nav" className={classes.filterMenu}>
        <ListItem button onClick={handleSortDSD}>
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText primary="گران ترین" />
        </ListItem>
        <ListItem button  onClick={handleSortASD}>
          <ListItemIcon>
            <ArrowDownwardIcon />
          </ListItemIcon>
          <ListItemText primary="ارزان ترین" />
        </ListItem>
      </List>
        </Grid>
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
        {/* <Order /> */}
      </Grid>
    </Grid>
  );
}
