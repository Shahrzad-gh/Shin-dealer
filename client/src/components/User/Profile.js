import { CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { Card} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getUserById } from '../../Store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import {getUserOrdersByUserId} from "../../Store/actions/orderActions"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Admin/Title';
import moment from 'moment';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    display: 'flex',
    height: '83vh'
  },
  card: {
    border: '1px solid blue'
  },
  typography : {
    fontFamily: "Almarai", fontSize: "1rem",
    padding: 12,
    margin: 0
  },
  status:{
    display: 'flex',
  },
  profile: {
    margin: '5px',
    border: '1px solid gray',
    borderRadius: '10px'
  }
})
function Profile(props) {
  console.log(props.location.query)
  const classes = useStyles();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userId = props.location.query.id;
  const userInfo = user.user[userId]
  const orders = useSelector((state) => state.orders)
  var status = "";

  useEffect(() => {
    const payload = {
      params : {
        userId
      }
    }
    dispatch(getUserById(payload));
    dispatch(getUserOrdersByUserId(payload))
  }, [])

  console.log(userInfo)
  console.log(orders.orders.orders)

  return (
    <Box className={classes.root}>
      <Box className={classes.profile} display="flex" p={1} height="100%" width="30%">
      {"user profile"}
      </Box>
      <Box width="70%">
      <Box className={classes.profile} display="flex" p={1} flexGrow={1} height="40%">
      <div>
        <div className={classes.header}>{"userInfo"}</div>
        <div className={classes.status}>
         {userInfo && (
         <>
         <div>{userInfo.firstName}</div>
         <div>{userInfo.lastName}</div>
         <div>{userInfo.email}</div>
         </>
         )}
        </div>
      </div>
      </Box>
      <Box className={classes.profile} display="flex-block" p={1} flexGrow={1} height="58%">
      <Title>All Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {/* <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell> */}
            <TableCell>OrderId</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Sale Amount</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {orders.orders.orders && orders.orders.orders.map((row) =>
          <TableRow key={row._id}>
            <TableCell className={classes.typography}>{moment().calendar(row.createdAt)}</TableCell>
            {/* <TableCell><UserInfo key ={index} data={row.user} /></TableCell>
            <TableCell className={classes.typography}>{row.shipTo}</TableCell> */}
            <TableCell className={classes.typography}>{row._id}</TableCell>  
            <TableCell >{row.paymentStatus === 'complete' ? <Typography className={classes.paymentDone}>{row.paymentStatus}</Typography>
             : <Typography className={classes.paymentPending}>{row.paymentStatus}</Typography>}</TableCell>
            <TableCell className={classes.typography} align="right">${row.totalAmount}</TableCell>
            <TableCell className={classes.typography}>
              <Link to={`Order/${row._id}`}>
                <Button variant="contained" color="primary" >Details</Button>
                </Link>
                </TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
      </Box>
      </Box>
    </Box>
  )
}

export default Profile
