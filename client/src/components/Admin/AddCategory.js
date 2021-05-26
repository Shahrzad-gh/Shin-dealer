import React, { useState } from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Title from './Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useHistory } from "react-router-dom";
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

export default function AddCategory() {
  const classes = useStyles();
  const [category, setCategory] = useState({
    name:'',
  });
  const [parentCategory, setParentCategory] = React.useState('');
  const handleParent = (event) => {
    setParentCategory(event.target.value);
  };
  const history = useHistory();

  const {name} = category;

  function handleOnChange(e){
    setCategory({...category,[e.target.name] : e.target.value});
  }
 

  async function handleOnSubmit(e){
    e.preventDefault();
    try{
      const categoryData = {
        name
      };
      console.log(categoryData)
      await axios.post('/addcategory', categoryData);
      history.push("/Admin");
      window.location.reload(true);
    }catch(err){
      console.error(err)
    }
  }

  return (
    <React.Fragment>
      <Title>Add Category</Title>
      <div>
      <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="parent-category">Parent Category</InputLabel>
        <NativeSelect
          id="parent-category"
          value={parentCategory}
          onChange={handleParent}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Women</option>
          <option value={20}>Men</option>
          <option value={30}>Kids</option>
        </NativeSelect>
            </Grid>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}       
          >
            Add Category
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}