import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem", textAlign: "center" },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paddingCard: {
    padding: 3,
  },
}));
export default function Services() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography component={'span'} className={classes.typography}>
                  <i className="fas fa-retweet fa-2x"></i>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent className={classes.typography}>
                <Typography component={'span'} className={classes.typography}>
                  <i className="fas fa-shipping-fast fa-2x"></i>
                  <p> ارسال رایگان</p>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent className={classes.typography}>
                <Typography  component={'span'} className={classes.typography}>
                  <i className="far fa-credit-card fa-2x"></i>
                  <p> پرداخت مطمئن</p>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent className={classes.typography}>
                <Typography component={'span'} className={classes.typography}>
                  <i className="fas fa-phone-volume fa-2x"></i>
                  <p>پشتیبانی 24 ساعته</p>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
