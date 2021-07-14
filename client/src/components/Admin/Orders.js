import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';
import moment from 'moment';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] =useState()
  
  useEffect(() => {
    axios.get('/getAllOrders').then(res => setOrders(res.data.orders)).catch(err => console.log(err))
    }, [])

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            {/* <TableCell>Ship To</TableCell> */}
            <TableCell>Payment Method</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders && orders.reverse().slice(0, 10).map((row) => (
            <TableRow key={row._id}>
              <TableCell>{moment().calendar(row.createdAt)}</TableCell>
              <TableCell>{row.user}</TableCell>
              {/* <TableCell>{row.shipTo}</TableCell> */}
              <TableCell>{row.paymentType}</TableCell>
              <TableCell>{row.paymentStatus}</TableCell>
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