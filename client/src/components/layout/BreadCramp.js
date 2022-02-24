import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  typography: {
    fontFamily: "Almarai !important",
    fontSize: "1rem !important",
    fontWeight: "normal",
  },
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const classes = useStyles();

  const breadcrumbs = [
    <Typography className={classes.typography}>
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        onClick={handleClick}
      >
        پیراهن
      </Link>
    </Typography>,
    <Typography className={classes.typography}>
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        زنانه
      </Link>
    </Typography>,
    <Typography key="3" color="text.primary" className={classes.typography}>
      خانه
    </Typography>,
  ];

  return (
    <Stack spacing={2} style={{ margin: 30 }}>
      <Breadcrumbs separator="<" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      {/* <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs> */}
    </Stack>
  );
}
