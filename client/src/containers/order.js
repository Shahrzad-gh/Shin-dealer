import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from 'axios';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { CardContent, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../Store/actions/orderActions";
const useStyles = makeStyles({
  root: {
    marginTop: 10,
    minWidth: 275,
    display: 'inline-block'
    },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  cover: {
    width: 50,
    height: 50,
  },
  timeline: {
    paddingTop: 40,
    // transform: "rotate(90deg)"
  },
});

export default function Order(props) {
  const classes = useStyles();
  //const [order, setOrder] = useState(null);
  const dispatch = useDispatch()
  const order = useSelector(state => state.orders.orderDetails)
  
  useEffect(() => {
    const payload = {
      params: {
        orderId : props.match.params.id
      }
    }
    dispatch(getOrderById(payload))
    },[dispatch])

    order[0] && console.log(order[0])
  return (
    <Card className={classes.root} variant="outlined">
      <Typography className={classes.typography}>Track your Order</Typography>
      <Card>
        <CardContent>
          <Typography className={classes.typography}>Details:</Typography>
          {order[0] && 
          <section key={order[0]._id}>
              <div> Payment Satus: {order[0].paymentStatus}</div>
              <div> Total: {order[0].totalAmount}</div>
              <div> OrderId: {order[0]._id}</div>
          </section>
            }
        </CardContent>
      </Card>
    <Timeline align="right" className={classes.timeline}>
      {order[0] &&  order[0].orderStatus.map((item, index) =>
        <TimelineItem key={index}>
        <TimelineSeparator>
          { item.isCompleted ? <TimelineDot color="primary"/> : <TimelineDot />}
          {index === 3 ? null : <TimelineConnector />}
       </TimelineSeparator>
        <TimelineContent>{item.type}</TimelineContent>
      </TimelineItem>
      )}
    </Timeline> 
    </Card>
  );
}
