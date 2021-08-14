import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
//import UserInfo from './UserInfo';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
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
  console.log(props)
  const classes = useStyles();
  const orders = props.location.query && props.location.query.orders
  console.log(orders);
  var status = "";
  return (
    <React.Fragment>
      <Title>All Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {/* <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell> */}
            <TableCell>OrderId</TableCell>
            <TableCell>OrderNext</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Sale Amount</TableCell>
            <TableCell>Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {orders && orders.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={classes.typography}>{moment().calendar(row.createdAt)}</TableCell>
            {/* <TableCell><UserInfo key ={index} data={row.user} /></TableCell>
            <TableCell className={classes.typography}>{row.shipTo}</TableCell> */}
            <TableCell className={classes.typography}>{row._id}</TableCell> 
            <TableCell className={classes.typography}>{row.orderStatus.map((item) => 
            item.isCompleted ? status = item.type : status = "Ordered"
            )}</TableCell> 
            <TableCell className={classes.typography}>{row.paymentType}</TableCell>
            <TableCell >{row.paymentStatus === 'complete' ? <Typography className={classes.paymentDone}>{row.paymentStatus}</Typography>
             : <Typography className={classes.paymentPending}>{row.paymentStatus}</Typography>}</TableCell>
            <TableCell className={classes.typography} align="right">${row.totalAmount}</TableCell>
            <TableCell className={classes.typography}>
              <Link to={{pathname:`ManageOrder/${row._id}`, param:{status}}}>
                <Button variant="contained" color="primary" >Manage</Button>
                </Link>
                </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default AllOrders
