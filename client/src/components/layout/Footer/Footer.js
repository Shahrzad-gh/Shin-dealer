import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  styledCard: {
    padding: 10,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container className={classes.styledCard}>
          <Grid container>
            <Grid
              item
              xs={4}
              className={(classes.styledCard, classes.typography)}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            </Grid>

            <Grid
              item
              xs={4}
              className={(classes.styledCard, classes.typography)}
            ></Grid>
            <Grid
              item
              xs={4}
              className={(classes.styledCard, classes.typography)}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
}
