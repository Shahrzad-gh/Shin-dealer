import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [product, setProduct] = useState({
    picture:'',
    name:'',
    count:'',
    description:''
  });
  const history = useHistory();

  const {picture, name, count, description} = product;

  function handleOnChange(e){
    setProduct({...product,[e.target.name] : e.target.value});
  }
 

  async function handleOnSubmit(e){
    e.preventDefault();
    try{
      const productData = {
        picture,
        name,
        count,
        description
      };
      await axios.post('/addproduct', productData);
      history.push("/Admin");
      window.location.reload(true);
    }catch(err){
      console.error(err)
    }
  }

  return (
    <React.Fragment>
      <Title>Add Product</Title>
      <div>
      <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
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
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="image"
                  alt="product-pic"
                  name="picture"
                  variant="outlined"
                  id="picture"
                  label="picture"
                  value={picture}
                  onChange={handleOnChange}
                  hidden
                />
              </Button>
            </Grid>
          </Grid>
          <Button
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