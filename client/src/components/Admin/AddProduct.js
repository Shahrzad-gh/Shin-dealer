import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [picture, setPicture] = useState()
  const [categoryItems, setCategoryItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [product, setProduct] = useState({
    name: "",
    count: "",
    price: "",
    description: "",
  });
  const history = useHistory();

  const {name, count, price, description } = product;

  function handleOnChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleUploadImage(e) {
    setPicture(e.target.files[0]);
  }
  useEffect(() => {
try {
  axios.get('/getcategories').then(res => setCategoryItems(res.data.categoryList)).catch(err => console.log(err))
} catch (err) {
  console.log(err)
}
  }, [])

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const productData = new FormData()
    productData.append('name', name)
    productData.append('count', count)
    productData.append('price', price)
    productData.append('description', description)
    productData.append('category', selectedCategory)
    productData.append('pictures', picture)

    try {
      await axios.post("/addproduct",  productData);
      
     history.push("/Admin");
      window.location.reload(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <React.Fragment>
      <Title>Add Product</Title>
      <div>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="p-name"
                label="Name"
                value={name}
                onChange={handleOnChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="count"
                label="Count"
                name="count"
                value={count}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                value={price}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={handleOnChange}
              />
              <div className="email error"></div>
            </Grid>
            <Grid item xs={12}>
            <NativeSelect
          value={selectedCategory}
          onChange={handleCategory}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          {categoryItems && categoryItems.map((cat, index) => 
            <optgroup key={index} label={cat.name}>
            {cat.children.map((c, index) =>             
            <option key={index} value={c._id}>{c.name}</option>)}
          </optgroup>)}

        </NativeSelect>

           <div className="category error"></div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="upload-photo">
                <input
                  id="img"
                  name="img"
                  type="file"
                  multiple
                  onChange={handleUploadImage}
                />
              </label>
            </Grid>
          </Grid>
          <Button
            onClick={handleOnSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Product
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
