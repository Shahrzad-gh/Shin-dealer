import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 35
  },

  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function ManageOrder(props) {
  const classes = useStyles();

  const [orderStatus, setOrderStatus] = React.useState('female');

  const handleChange = (event) => {
    setOrderStatus(event.target.value);
  };

  const handleChangeOrderStatus = () => {
    dispatch(updateOrderStatus)
  }
  
  return (
      <FormControl className={classes.root} component="fieldset" onSubmit={handleChangeOrderStatus}>
      <FormLabel component="legend">Change order status :</FormLabel>
      <RadioGroup aria-label="orderStatus" name="orderStatus" value={orderStatus} onChange={handleChange}>
        <FormControlLabel value="ordered" control={<Radio color="primary"/>} label="ordered" />
        <FormControlLabel value="packed" control={<Radio color="primary"/>} label="packed" />
        <FormControlLabel value="shipping" control={<Radio color="primary"/>} label="shipping" />
        <FormControlLabel value="delivered" control={<Radio color="primary"/>} label="delivered" />
      </RadioGroup>
      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
      Apply
    </Button>
    </FormControl>
  )
}

export default ManageOrder
