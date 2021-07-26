import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import UserInfo from './UserInfo';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  paymentPending: {
    fontFamily: "Almarai",
    color: 'blue',
    fontWeight: 'bold'
  },
  paymentDone: {
    fontFamily: "Almarai",
    color: 'green',
    fontWeight: 'bold'
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    fontWeight: 'normal'
  },
}));

function AllOrders(props) {
  const classes = useStyles();
  const orders = props.location.query && props.location.query.orders
  return (
    <React.Fragment>
      <Title>All Orders</Title>
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
         {orders && orders.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={classes.typography}>{moment().calendar(row.createdAt)}</TableCell>
            <TableCell><UserInfo key ={index} data={row.user} /></TableCell>
            <TableCell className={classes.typography}>{row.shipTo}</TableCell>
            <TableCell className={classes.typography}>{row.paymentType}</TableCell>
            <TableCell >{row.paymentStatus === 'complete' ? <Typography className={classes.paymentDone}>{row.paymentStatus}</Typography>
             : <Typography className={classes.paymentPending}>{row.paymentStatus}</Typography>}</TableCell>
            <TableCell className={classes.typography} align="right">${row.totalAmount}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default AllOrders
