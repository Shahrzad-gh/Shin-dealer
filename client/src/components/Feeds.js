import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai !important", fontSize: "1rem !important" },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  content: {
    position: "absolute",
    top: 20,
    left: 10,
  },
}));
export default function Feeds() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="sale"
                    height="140"
                    image="https://t4.ftcdn.net/jpg/02/06/48/31/240_F_206483181_lzr9IaOPG2djCIl1VdZHwWjDKODyJYev.jpg"
                    title="تخفیف"
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      تخفیف
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="bestseller"
                    height="140"
                    image="https://t4.ftcdn.net/jpg/02/32/16/07/240_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg"
                    title="پرفروش"
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      پرفروش
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
