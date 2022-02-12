import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
// import { Card} from '@material-ui/core';
import Box from "@mui/material/Box";
import { getUserById } from "../../Store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrdersByUserId } from "../../Store/actions/orderActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Admin/Title";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RateReviewIcon from "@mui/icons-material/RateReview";
import InfoIcon from "@mui/icons-material/Info";
import ReceiptIcon from "@mui/icons-material/Receipt";
import EditLocationIcon from "@mui/icons-material/EditLocation";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    display: "flex",
    height: "83vh",
  },
  card: {
    border: "1px solid blue",
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    padding: 12,
    margin: 0,
  },
  status: {
    display: "flex",
  },
  profile: {
    margin: "5px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
});
function Profile(props) {
  console.log(props.location.query);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userId = props.location.query.id;
  const userInfo = user.user[userId];
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    const payload = {
      params: {
        userId,
      },
    };
    dispatch(getUserById(payload));
    dispatch(getUserOrdersByUserId(payload));
  }, []);

  console.log(userInfo);
  console.log(orders.orders.orders);

  const handleIcon = (index) => {
    switch (index) {
      case 0:
        return <ReceiptIcon />;
      case 1:
        return <RateReviewIcon />;
      case 2:
        return <EditLocationIcon />;
      case 3:
        return <InfoIcon />;
    }
  };

  return (
    <Box className={classes.root}>
      <Box
        className={classes.profile}
        display="flex"
        p={1}
        height="100%"
        width="30%"
      >
        <div className={classes.drawerContainer}>
          <List>
            {["Orders", "Reviews", "Addresses", "Information"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{handleIcon(index)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Box>
      <Box width="70%">
        <Box
          className={classes.profile}
          display="flex"
          p={1}
          flexGrow={1}
          height="40%"
        >
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
        <Box
          className={classes.profile}
          display="flex-block"
          p={1}
          flexGrow={1}
          height="58%"
        >
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
              {orders.orders.orders &&
                orders.orders.orders.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell className={classes.typography}>
                      {moment().calendar(row.createdAt)}
                    </TableCell>
                    {/* <TableCell><UserInfo key ={index} data={row.user} /></TableCell>
            <TableCell className={classes.typography}>{row.shipTo}</TableCell> */}
                    <TableCell className={classes.typography}>
                      {row._id}
                    </TableCell>
                    <TableCell>
                      {row.paymentStatus === "complete" ? (
                        <Typography className={classes.paymentDone}>
                          {row.paymentStatus}
                        </Typography>
                      ) : (
                        <Typography className={classes.paymentPending}>
                          {row.paymentStatus}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell className={classes.typography} align="right">
                      ${row.totalAmount}
                    </TableCell>
                    <TableCell className={classes.typography}>
                      <Link to={`Order/${row._id}`}>
                        <Button variant="contained" color="primary">
                          Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
