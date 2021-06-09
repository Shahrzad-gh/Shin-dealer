import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

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
  const [picture, setPicture] = useState([])
  const [product, setProduct] = useState({
    name: "",
    count: "",
    price: "",
    description: "",
    category:""
  });
  const history = useHistory();

  const {name, count, price, description, category } = product;

  function handleOnChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleUploadImage(e) {
    console.log(e.target.files[0])
    setPicture([...picture, e.target.files]);
  }

  async function handleOnSubmit(e) {
    console.log(picture)

    e.preventDefault();
    const productData = new FormData()
    productData.append('name', name)
    productData.append('count', count)
    productData.append('price', price)
    productData.append('description', description)
    productData.append('category', category)
    
    for (let pic of picture) {
      productData.append('picture', pic)
    }

    console.log(productData);

    try {
      await axios.post("/addproduct",  productData);
     // history.push("/Admin");
      //window.location.reload(true);
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
              <TextField
                variant="outlined"
                required
                fullWidth
                id="category"
                label="category"
                name="category"
                value={category}
                onChange={handleOnChange}
              />
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
