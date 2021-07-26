import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import moment from 'moment';
import {useDispatch , useSelector} from 'react-redux'
import { getAllOrders } from '../../Store/actions/orderActions';
import UserInfo from './UserInfo';
import { Typography } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paymentPending: {
    color: 'blue',
    fontWeight: 'bold'
  },
  paymentDone: {
    color: 'green',
    fontWeight: 'bold'


  }
}));


export default function Orders() {
  const classes = useStyles();
 
  const dispatch = useDispatch()

  const orders = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getAllOrders())
    }, [dispatch])




  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {orders.orders.orders && orders.orders.orders.reverse().slice(0,10).map((row, index) => (
          <TableRow key={index}>
            <TableCell>{moment().calendar(row.createdAt)}</TableCell>
            <TableCell><UserInfo key ={index} data={row.user} /></TableCell>
            <TableCell>{row.shipTo}</TableCell>
            <TableCell>{row.paymentType}</TableCell>
            <TableCell>{row.paymentStatus === 'complete' ? <Typography className={classes.paymentDone}>{row.paymentStatus}</Typography>
             : <Typography className={classes.paymentPending}>{row.paymentStatus}</Typography>}</TableCell>
            <TableCell align="right">{row.totalAmount}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
