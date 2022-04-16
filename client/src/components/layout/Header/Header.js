import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position:"relative"
  },
  imagRoot: {
    width: "100%",
    height: "auto",
    objectFit:"cover"
  },
  textRoot: {
    position: "absolute",
    top: '20%',
    left: '5%',
    textAlign:"left"
  }


}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.imagRoot} src="https://img.freepik.com/free-photo/knitted-sweaters-wooden-background-interior_169016-3698.jpg?t=st=1650116629~exp=1650117229~hmac=1a4629241f6198058598d3213202cb21146f7fb5c1d6948edecfd1388e1197c1&w=826"
        alt="header" title="header" />
      <div className={classes.textRoot}>
        <h3>Collection 2022</h3>
        <h1>NEW ARRIVALS</h1>
        <button type="button">SHOP NOW</button>
      </div>
    </div>
  )
}

export default Header