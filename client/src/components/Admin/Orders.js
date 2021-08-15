import React, {useEffect} from 'react';
//import LinkMui from '@material-ui/core/Link';
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
import { Link } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
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
            {/* <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell> */}
            <TableCell>OrderId</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {orders.orders.orders && orders.orders.orders.reverse().slice(0,10).map((row, index) => (
          <TableRow key={index}>
            <TableCell className={classes.typography}>{moment(row.creatAt).format('LL')}</TableCell>
            {/* <TableCell><UserInfo key ={index} data={row.user} /></TableCell> */}
            {/* <TableCell className={classes.typography}>{row.shipTo}</TableCell> */}
            <TableCell className={classes.typography}>{row._id}</TableCell>
            <TableCell className={classes.typography}>{row.paymentType}</TableCell>
            <TableCell >{row.paymentStatus === 'complete' ? <Typography className={classes.paymentDone}>{row.paymentStatus}</Typography>
             : <Typography className={classes.paymentPending}>{row.paymentStatus}</Typography>}</TableCell>
            <TableCell className={classes.typography} align="right">${row.totalAmount}</TableCell>
            <TableCell className={classes.typography} align="right"></TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
      <Link to={{
            pathname: '/allOrders', 
            query:{orders: orders.orders.orders}}} >
        <div className={classes.seeMore}>
          See more orders
      </div>
      </Link>
    </React.Fragment>
  );
}