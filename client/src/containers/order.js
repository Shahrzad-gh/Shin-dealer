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
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await axios.get('/getorder', {params:{id:props.match.params.id}})
        let o = data.data.order;
        setOrder(o)
      }catch(err){
        console.error(err)
      }
    }
    fetchData();
    })

  return (
    <Card className={classes.root} variant="outlined">
      <Typography className={classes.typography}>Track your Order</Typography>
      <Card>
        <CardContent>
          <Typography className={classes.typography}>Details:</Typography>
          {order && order.map((item,index) => 
          <section key={index}>
              <div> Payment Satus: {item.paymentStatus}</div>
              <div> Total: {item.totalAmount}</div>
              <div> OrderId: {item._id}</div>
              {item.items.map((i) => 
                <div key={i._id}> item: {i.product}</div>
              )}
          </section>
            )}
        </CardContent>
      </Card>
    <Timeline align="right" className={classes.timeline}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Ordered</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>packed</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Shipped</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
        </TimelineSeparator>
        <TimelineContent>Delivered</TimelineContent>
      </TimelineItem>
    </Timeline> 
    </Card>
  );
}
