import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../Store/actions/userAction";
import { Typography } from "mui/material";
import { makeStyles } from "mui/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: "Almarai",
    // fontSize: "1rem",
    fontWeight: "normal",
  },
}));

function UserInfo(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = useSelector((state) => {
    return state.user;
  });
  const userFirstName = user.user[props.data];

  useEffect(() => {
    const userId = props.data;
    const payload = {
      params: {
        userId,
      },
    };
    dispatch(getUserById(payload));
  }, [dispatch, props.data]);

  return (
    <div>
      <Typography className={classes.typography}>
        {" "}
        {userFirstName && userFirstName.firstName}{" "}
      </Typography>
    </div>
  );
}

export default UserInfo;
